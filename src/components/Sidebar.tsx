import { motion } from 'framer-motion'
import clsx from 'clsx'

interface Section {
  id: string
  label: string
}

interface SidebarProps {
  sections: Section[]
  activeSection: string
}

export default function Sidebar({ sections, activeSection }: SidebarProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-[220px] bg-navy-950 border-r border-navy-600 flex flex-col z-50">
      {/* Logo */}
      <div className="px-6 pt-8 pb-6 border-b border-navy-600">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-accent flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L7 2L12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 8.5H10" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-700 text-white leading-tight">Mav Consulting</p>
            <p className="text-[10px] text-navy-500 leading-tight">Sales Strategy</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {sections.map((section, idx) => {
          const isActive = activeSection === section.id
          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={clsx(
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 cursor-pointer group',
                isActive
                  ? 'bg-accent/15 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-navy-700',
              )}
            >
              <span
                className={clsx(
                  'flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center text-[10px] font-bold transition-colors duration-200',
                  isActive ? 'border-accent text-accent' : 'border-navy-600 text-slate-500 group-hover:border-slate-500',
                )}
              >
                {idx + 1}
              </span>
              <span className="text-sm font-medium leading-tight">{section.label}</span>
              {isActive && (
                <motion.div
                  layoutId="active-dot"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-accent"
                />
              )}
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 pb-6 border-t border-navy-600 pt-4">
        <p className="text-[10px] text-slate-500 leading-relaxed">
          Presented by<br />
          <span className="text-slate-400 font-medium">Segun Oluwadele</span>
        </p>
        <p className="text-[10px] text-slate-600 mt-1">May 2026</p>
      </div>
    </aside>
  )
}
