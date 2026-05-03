import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Cover() {
  const scrollToNext = () => {
    document.getElementById('snapshot')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="cover"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-[#0d1f3d]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
          <span className="text-xs font-medium text-accent tracking-wide uppercase">
            BDR Interview Presentation · Mav Consulting Group
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-800 text-white leading-tight mb-5"
        >
          Scaling the Sales Engine
          <br />
          <span className="text-accent">at Mav Consulting Group</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xl text-slate-300 font-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          A 90-Day BDR → AE Ramp Plan: from zero sales team to a repeatable,
          scalable revenue engine — built specifically for Zoho CRM.
        </motion.p>

        {/* Presenter info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          <div className="text-center">
            <p className="text-sm text-slate-400">Presented by</p>
            <p className="text-white font-600 text-lg">Segun Oluwadele</p>
          </div>
          <div className="w-px h-10 bg-navy-600" />
          <div className="text-center">
            <p className="text-sm text-slate-400">Date</p>
            <p className="text-white font-500">May 2026</p>
          </div>
          <div className="w-px h-10 bg-navy-600" />
          <div className="text-center">
            <p className="text-sm text-slate-400">Role</p>
            <p className="text-white font-500">BDR → AE</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll CTA */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors duration-200 cursor-pointer group"
        aria-label="Scroll to next section"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Explore</span>
        <ChevronDown
          size={20}
          className="animate-bounce group-hover:text-accent transition-colors duration-200"
        />
      </motion.button>
    </section>
  )
}
