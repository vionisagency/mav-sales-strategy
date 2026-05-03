import { useState } from 'react'
import { motion } from 'framer-motion'
import { DEFAULT_KPIS, KpiState } from '../../data/defaults'
import { useSalesCalc } from '../../hooks/useSalesCalc'
import KpiInputPanel from '../simulator/KpiInputPanel'
import FunnelChart from '../simulator/FunnelChart'

export default function SalesSimulator() {
  const [kpis, setKpis] = useState<KpiState>(DEFAULT_KPIS)
  const calc = useSalesCalc(kpis)

  const handleChange = (key: keyof KpiState, value: number) => {
    setKpis((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <section id="simulator" className="h-screen flex flex-col bg-navy-950 overflow-hidden">
      {/* Section header */}
      <div className="px-12 pt-10 pb-5 border-b border-navy-600 flex-shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-accent text-sm font-600 tracking-wider uppercase">Section 02</span>
            <div className="h-px flex-1 bg-navy-600" />
          </div>
          <h2 className="text-4xl font-800 text-white mb-1">Sales Simulator</h2>
          <p className="text-slate-400 text-lg">
            Adjust the KPIs on the left. The pipeline funnel updates in real time.
          </p>
        </motion.div>
      </div>

      {/* Split layout */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Left: KPI inputs */}
        <div className="w-[380px] flex-shrink-0 border-r border-navy-600 overflow-y-auto">
          <KpiInputPanel
            kpis={kpis}
            onChange={handleChange}
            demosPerWeek={calc.demosPerWeek}
            demosPerMonth={calc.demosPerMonth}
            bdrsNeeded={calc.bdrsNeeded}
          />
        </div>

        {/* Right: Chart */}
        <div className="flex-1 overflow-hidden">
          <FunnelChart calc={calc} kpis={kpis} />
        </div>
      </div>
    </section>
  )
}
