import { motion } from 'framer-motion'
import { UserPlus, Phone, Presentation, Users } from 'lucide-react'

const milestones = [
  {
    months: 'Month 1–2',
    icon: UserPlus,
    role: 'Hire BDR',
    name: 'Segun Oluwadele',
    color: 'accent',
    borderColor: 'border-accent/40',
    bgColor: 'bg-accent/10',
    iconBg: 'bg-accent/15',
    iconColor: 'text-accent',
    kpi: '80–100 touches/day · 5–8 connections/day · 5+ demos booked/week',
    zoho: 'Set up lead scoring, BDR pipeline view, 14-touch cold sequence',
    description:
      'BDR owns all cold outreach. Shadows every demo. Builds call scripts and email sequences. Sameet reviews pipeline weekly and runs all closes.',
    tasks: [
      'Own all outbound prospecting (cold call, email, LinkedIn)',
      'Shadow 100% of demos with Sameet',
      'Build and refine cold call scripts for both verticals',
      'Configure Zoho CRM sequences for BDR pipeline',
      'Weekly pipeline review with Sameet',
    ],
  },
  {
    months: 'Month 3',
    icon: Phone,
    role: 'BDR Runs Discovery Calls',
    name: 'Segun Oluwadele',
    color: 'warning',
    borderColor: 'border-warning/40',
    bgColor: 'bg-warning/10',
    iconBg: 'bg-warning/15',
    iconColor: 'text-warning',
    kpi: '15+ demos/month · 35%+ warm connect→demo rate',
    zoho: 'AE pipeline view for Sameet, demo follow-up automation',
    description:
      'BDR independently runs 20-minute intro/discovery calls. Qualifies BANT, books demos for Sameet. Sameet focuses exclusively on demos and closes — no more prospecting.',
    tasks: [
      'Run all intro calls independently (20-min qualification)',
      'Book 15+ qualified demos/month for Sameet',
      'Track opportunity stage in Zoho: Intro → Demo Scheduled',
      'Send pre-demo briefings to Sameet before each call',
      'Sameet stops doing outreach entirely',
    ],
  },
  {
    months: 'Month 4–5',
    icon: Presentation,
    role: 'BDR Fast-Tracked to AE',
    name: 'Segun → AE',
    color: 'positive',
    borderColor: 'border-positive/40',
    bgColor: 'bg-positive/10',
    iconBg: 'bg-positive/15',
    iconColor: 'text-positive',
    kpi: '25+ demos/month · Segun hits 40%+ warm connect→demo rate',
    zoho: 'Second AE pipeline, deal stage automation, closed/won reporting',
    description:
      'Segun starts running full product demos independently. Hire BDR #2 to backfill outreach. Two AEs (Sameet + Segun) split the demo load. First month of true sales team.',
    tasks: [
      'Segun runs full demos independently (supervised → solo)',
      'Post requisition and begin hiring BDR #2',
      'Onboard BDR #2 with documented playbook',
      'Sameet and Segun split demo load 50/50',
      '25+ demos/month total from combined AE capacity',
    ],
  },
  {
    months: 'Month 6+',
    icon: Users,
    role: 'Scale the Machine',
    name: 'Full Sales Team',
    color: 'purple',
    borderColor: 'border-purple-400/40',
    bgColor: 'bg-purple-500/10',
    iconBg: 'bg-purple-500/15',
    iconColor: 'text-purple-400',
    kpi: '40+ demos/month · tracked cold/warm/hot connection rates in Zoho',
    zoho: 'Sales analytics dashboard, leaderboard, forecasting in Zoho',
    description:
      '2 AEs + 1–2 BDRs. Fully documented sales playbook. Sameet transitions to growth strategy, partnerships, and enterprise deals. Sales org runs without founder involvement in day-to-day.',
    tasks: [
      '2 AEs running demos independently',
      '1–2 BDRs generating 40+ demos/month pipeline',
      'Documented playbook: scripts, BANT framework, demo structure',
      'Zoho CRM fully configured with analytics and forecasting',
      'Sameet focuses on Zoho partner tier advancement and enterprise deals',
    ],
  },
]

const colorMap: Record<string, string> = {
  accent: '#3b82f6',
  warning: '#f59e0b',
  positive: '#22c55e',
  purple: '#a855f7',
}

export default function HiringRoadmap() {
  return (
    <section id="roadmap" className="min-h-screen py-24 px-12 bg-navy-900 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto w-full"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-accent text-sm font-600 tracking-wider uppercase">Section 03</span>
          <div className="h-px flex-1 bg-navy-600" />
        </div>
        <h2 className="text-4xl font-800 text-white mb-2">Hiring Roadmap</h2>
        <p className="text-slate-400 mb-12 text-lg">
          From 1 founder-seller to a full sales team in 6 months.
        </p>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[23px] top-8 bottom-8 w-px bg-gradient-to-b from-accent via-warning to-positive opacity-30" />

          <div className="space-y-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.months}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative pl-14 p-6 rounded-2xl border ${m.borderColor} ${m.bgColor}`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 top-6 w-7 h-7 rounded-full ${m.iconBg} border-2 flex items-center justify-center`}
                  style={{ borderColor: colorMap[m.color] }}
                >
                  <m.icon size={13} className={m.iconColor} />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className="text-xs font-700 px-2 py-0.5 rounded-full"
                          style={{
                            background: `${colorMap[m.color]}20`,
                            color: colorMap[m.color],
                          }}
                        >
                          {m.months}
                        </span>
                        <h3 className="text-white font-700 text-lg">{m.role}</h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{m.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {/* KPI target */}
                    <div className="bg-navy-800/50 rounded-xl p-3">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 font-700">KPI Target</p>
                      <p className="text-xs text-white font-500 leading-relaxed">{m.kpi}</p>
                    </div>
                    {/* Zoho unlock */}
                    <div className="bg-navy-800/50 rounded-xl p-3">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 font-700">Zoho CRM Setup</p>
                      <p className="text-xs text-white font-500 leading-relaxed">{m.zoho}</p>
                    </div>
                    {/* Tasks */}
                    <div className="bg-navy-800/50 rounded-xl p-3">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 font-700">Key Actions</p>
                      <ul className="space-y-0.5">
                        {m.tasks.slice(0, 3).map((t, ti) => (
                          <li key={ti} className="flex items-start gap-1.5">
                            <span
                              className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                              style={{ background: colorMap[m.color] }}
                            />
                            <span className="text-[11px] text-slate-300 leading-relaxed">{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
