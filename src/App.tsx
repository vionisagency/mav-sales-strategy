import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Cover from './components/sections/Cover'
import CompanySnapshot from './components/sections/CompanySnapshot'
import SalesSimulator from './components/sections/SalesSimulator'
import HiringRoadmap from './components/sections/HiringRoadmap'
import Resources from './components/sections/Resources'
import { DEFAULT_KPIS, KpiState } from './data/defaults'
import { useSalesCalc } from './hooks/useSalesCalc'

const SECTIONS = [
  { id: 'cover', label: 'Cover' },
  { id: 'snapshot', label: 'Company Snapshot' },
  { id: 'simulator', label: 'Sales Simulator' },
  { id: 'roadmap', label: 'Hiring Roadmap' },
  { id: 'resources', label: 'Resources' },
]

export default function App() {
  const [activeSection, setActiveSection] = useState('cover')
  const [kpis, setKpis] = useState<KpiState>(DEFAULT_KPIS)
  const calc = useSalesCalc(kpis)

  const handleKpiChange = (key: keyof KpiState, value: number) => {
    setKpis((prev) => ({ ...prev, [key]: value }))
  }

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="flex min-h-screen bg-navy-900">
      <Sidebar sections={SECTIONS} activeSection={activeSection} />
      <main className="ml-[220px] flex-1">
        <Cover />
        <CompanySnapshot />
        <SalesSimulator kpis={kpis} onChange={handleKpiChange} calc={calc} />
        <HiringRoadmap calc={calc} kpis={kpis} />
        <Resources />
      </main>
    </div>
  )
}
