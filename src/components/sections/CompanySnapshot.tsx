import { motion } from 'framer-motion'
import { Building2, TrendingUp, Users, Zap, AlertCircle } from 'lucide-react'

const stats = [
  { label: 'Higher lease conversions', value: '23%', sub: 'Property Mgmt CRM case study' },
  { label: 'Raised in 3 months', value: '$2.5M', sub: 'CapRaise CRM case study' },
  { label: 'Dedicated salespeople', value: '0', sub: 'Current state — the opportunity' },
]

const verticals = [
  {
    icon: Building2,
    name: 'Property Management CRM',
    desc: 'Zoho-based platform for multi-family property managers. Consolidates leads from Zillow, Apartments.com, and web forms. Integrates with Rent Manager.',
  },
  {
    icon: TrendingUp,
    name: 'CapRaise CRM',
    desc: 'Investor relationship management for CRE syndicators and GPs. Includes AI lead scoring, SEC 506(c) compliance, and a LinkedIn extension (LinkCap).',
  },
]

const bottlenecks = [
  { icon: Users, text: 'Sameet Inamdar (Founder/CEO) handles every sales call and live demo personally' },
  { icon: Zap, text: 'No repeatable outreach process — all pipeline is inbound or founder-led' },
  { icon: AlertCircle, text: 'Demo capacity is the ceiling on revenue — the company can only close as fast as one person can demo' },
]

export default function CompanySnapshot() {
  return (
    <section id="snapshot" className="min-h-screen py-24 px-12 bg-navy-900 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto w-full"
      >
        {/* Section label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-accent text-sm font-600 tracking-wider uppercase">Section 01</span>
          <div className="h-px flex-1 bg-navy-600" />
        </div>
        <h2 className="text-4xl font-800 text-white mb-2">Company Snapshot</h2>
        <p className="text-slate-400 mb-12 text-lg">Where Mav Consulting Group is today — and where the opportunity is.</p>

        {/* Two-column cards */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          {/* About card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-navy-700 border border-navy-600 rounded-2xl p-7"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center">
                <Building2 size={16} className="text-accent" />
              </div>
              <h3 className="text-white font-700 text-lg">About Mav Consulting Group</h3>
            </div>

            <div className="space-y-3 mb-6">
              {[
                ['Founded', '2022'],
                ['HQ', 'Orange County, CA'],
                ['Partner Status', 'Zoho Authorized Partner'],
                ['Team Size', '2–10 employees'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">{label}</span>
                  <span className="text-white text-sm font-500">{value}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-navy-600 pt-5 space-y-4">
              {verticals.map((v) => (
                <div key={v.name} className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <v.icon size={12} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-600 mb-0.5">{v.name}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottleneck card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-navy-700 border border-navy-600 rounded-2xl p-7"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-warning/15 flex items-center justify-center">
                <AlertCircle size={16} className="text-warning" />
              </div>
              <h3 className="text-white font-700 text-lg">The Growth Bottleneck</h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Mav Consulting has strong product-market fit — proven results, a differentiated Zoho stack,
              and two clear verticals. The constraint isn't product. It's <span className="text-white font-600">sales bandwidth</span>.
            </p>

            <div className="space-y-4">
              {bottlenecks.map((b, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-xl bg-navy-800 border border-navy-600">
                  <div className="w-6 h-6 rounded bg-warning/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <b.icon size={12} className="text-warning" />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/20">
              <p className="text-accent text-sm font-600 mb-1">The opportunity</p>
              <p className="text-slate-300 text-xs leading-relaxed">
                Free Sameet from the sales treadmill. Build a BDR who generates pipeline, qualifies leads,
                and eventually closes — so the founder can focus on product, partnerships, and growth strategy.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
              className="bg-navy-700 border border-navy-600 rounded-xl p-5 text-center"
            >
              <p
                className={`text-4xl font-800 mb-1 ${
                  stat.value === '0' ? 'text-warning' : 'text-positive'
                }`}
              >
                {stat.value}
              </p>
              <p className="text-white text-sm font-600 mb-1">{stat.label}</p>
              <p className="text-slate-500 text-xs">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
