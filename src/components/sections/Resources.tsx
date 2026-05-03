import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, FileText, BookOpen, Settings, GraduationCap } from 'lucide-react'
import { RESOURCE_TABS, Resource } from '../../data/resources'
import clsx from 'clsx'

const TAB_ICONS = [FileText, BookOpen, Settings, GraduationCap]

const TAG_COLORS: Record<string, string> = {
  'Cold Outreach': 'bg-slate-600/40 text-slate-300',
  Email: 'bg-accent/15 text-accent',
  'Objection Handling': 'bg-warning/15 text-warning',
  Process: 'bg-positive/15 text-positive',
  Framework: 'bg-purple-500/15 text-purple-300',
  'Zoho Guide': 'bg-accent/15 text-accent',
  Integration: 'bg-positive/15 text-positive',
  Product: 'bg-warning/15 text-warning',
  Training: 'bg-purple-500/15 text-purple-300',
  Book: 'bg-pink-500/15 text-pink-300',
  Resources: 'bg-slate-600/40 text-slate-300',
  Benchmarks: 'bg-positive/15 text-positive',
}

function ResourceCard({ item }: { item: Resource }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-navy-700 border border-navy-600 rounded-xl overflow-hidden transition-all duration-200 hover:border-navy-500">
      <button
        className="w-full text-left p-5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
        onClick={() => setExpanded((p) => !p)}
        aria-expanded={expanded}
        aria-label={`${expanded ? 'Collapse' : 'Expand'} ${item.title}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              {item.tag && (
                <span
                  className={clsx(
                    'text-[10px] font-700 px-2 py-0.5 rounded-full uppercase tracking-wide',
                    TAG_COLORS[item.tag] ?? 'bg-navy-600 text-slate-400',
                  )}
                >
                  {item.tag}
                </span>
              )}
            </div>
            <h4 className="text-white font-700 text-sm leading-snug mb-1">{item.title}</h4>
            <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
          </div>
          <div className="flex-shrink-0 mt-0.5">
            {expanded ? (
              <ChevronUp size={16} className="text-slate-400" />
            ) : (
              <ChevronDown size={16} className="text-slate-400" />
            )}
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-navy-600 pt-4">
              <pre className="text-xs text-slate-300 leading-relaxed whitespace-pre-wrap font-sans">
                {item.content}
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Resources() {
  const [activeTab, setActiveTab] = useState(RESOURCE_TABS[0].id)
  const currentTab = RESOURCE_TABS.find((t) => t.id === activeTab)!

  return (
    <section id="resources" className="min-h-screen py-24 px-12 bg-navy-950 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto w-full flex-1"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-accent text-sm font-600 tracking-wider uppercase">Section 04</span>
          <div className="h-px flex-1 bg-navy-600" />
        </div>
        <h2 className="text-4xl font-800 text-white mb-2">Resources</h2>
        <p className="text-slate-400 mb-10 text-lg">
          Scripts, playbooks, Zoho guides, and learning resources — ready to use day one.
        </p>

        {/* Tabs */}
        <div className="flex gap-1 p-1 bg-navy-800 border border-navy-600 rounded-xl mb-8 w-fit">
          {RESOURCE_TABS.map((tab, i) => {
            const Icon = TAB_ICONS[i]
            const isActive = tab.id === activeTab
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={clsx(
                  'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-600 transition-colors duration-200 cursor-pointer',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-navy-800',
                  isActive
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-navy-700',
                )}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {currentTab.items.map((item) => (
              <ResourceCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-navy-600 flex items-center justify-between">
          <div>
            <p className="text-white font-700">Segun Oluwadele</p>
            <p className="text-slate-500 text-sm">BDR Candidate — Mav Consulting Group</p>
          </div>
          <div className="text-right">
            <p className="text-slate-400 text-sm">Built with Zoho CRM knowledge + real sales ops data</p>
            <p className="text-slate-600 text-xs mt-0.5">May 2026</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
