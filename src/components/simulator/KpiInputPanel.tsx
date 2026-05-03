import { KpiState } from '../../data/defaults'

interface Props {
  kpis: KpiState
  onChange: (key: keyof KpiState, value: number) => void
  demosPerWeek: number
  demosPerMonth: number
  bdrsNeeded: number
}

function SliderInput({
  label,
  value,
  min,
  max,
  step = 1,
  unit,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step?: number
  unit?: string
  onChange: (v: number) => void
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-xs text-slate-400 font-500">{label}</label>
        <span className="text-sm font-700 text-white tabular-nums">
          {value}
          {unit && <span className="text-xs text-slate-500 font-400 ml-0.5">{unit}</span>}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 appearance-none rounded-full cursor-pointer accent-accent bg-navy-600"
        style={{
          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((value - min) / (max - min)) * 100}%, #2a3a5c ${((value - min) / (max - min)) * 100}%, #2a3a5c 100%)`,
        }}
      />
      <div className="flex justify-between mt-0.5">
        <span className="text-[10px] text-slate-600">{min}{unit}</span>
        <span className="text-[10px] text-slate-600">{max}{unit}</span>
      </div>
    </div>
  )
}

function GroupLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="w-5 h-5 rounded-full bg-accent/20 text-accent text-[10px] font-800 flex items-center justify-center flex-shrink-0">
        {number}
      </span>
      <p className="text-xs font-700 text-slate-300 uppercase tracking-wider">{title}</p>
    </div>
  )
}

export default function KpiInputPanel({ kpis, onChange, demosPerWeek, demosPerMonth, bdrsNeeded }: Props) {
  const handlePctChange = (key: 'coldPct' | 'warmPct' | 'hotPct', newVal: number) => {
    const others: Array<'coldPct' | 'warmPct' | 'hotPct'> = ['coldPct', 'warmPct', 'hotPct'].filter(
      (k) => k !== key,
    ) as Array<'coldPct' | 'warmPct' | 'hotPct'>
    const remaining = 100 - newVal
    const currentSum = kpis[others[0]] + kpis[others[1]]
    if (currentSum === 0) {
      onChange(others[0], Math.floor(remaining / 2))
      onChange(others[1], remaining - Math.floor(remaining / 2))
    } else {
      const ratio = kpis[others[0]] / currentSum
      const a = Math.round(remaining * ratio)
      const b = remaining - a
      onChange(others[0], Math.max(0, a))
      onChange(others[1], Math.max(0, b))
    }
    onChange(key, newVal)
  }

  return (
    <div className="h-full overflow-y-auto px-6 py-6 space-y-7">
      {/* Group 1 — AE Capacity */}
      <div>
        <GroupLabel number="1" title="AE Capacity" />
        <div className="space-y-5">
          <SliderInput
            label="Sameet's demo hours/week"
            value={kpis.hoursPerWeek}
            min={1}
            max={40}
            unit="h"
            onChange={(v) => onChange('hoursPerWeek', v)}
          />
          <SliderInput
            label="Avg demo duration"
            value={kpis.demoDuration}
            min={15}
            max={120}
            step={15}
            unit="min"
            onChange={(v) => onChange('demoDuration', v)}
          />
        </div>
        {/* Derived stat */}
        <div className="mt-4 p-3 rounded-xl bg-navy-800 border border-navy-600 flex items-center justify-between">
          <span className="text-xs text-slate-400">AE capacity</span>
          <span className="text-sm font-700 text-accent tabular-nums">
            {demosPerWeek}/wk · {demosPerMonth}/mo
          </span>
        </div>
      </div>

      {/* Group 2 — Lead Pipeline */}
      <div>
        <GroupLabel number="2" title="Lead Pipeline" />
        <div className="space-y-5">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs text-slate-400 font-500">Total leads/month</label>
              <span className="text-sm font-700 text-white tabular-nums">{kpis.monthlyLeads}</span>
            </div>
            <input
              type="number"
              value={kpis.monthlyLeads}
              min={0}
              max={2000}
              onChange={(e) => onChange('monthlyLeads', Math.max(0, Number(e.target.value)))}
              className="w-full bg-navy-800 border border-navy-600 rounded-lg px-3 py-2 text-white text-sm font-600 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Lead quality split */}
          <div>
            <p className="text-xs text-slate-500 mb-3 font-500">Lead quality split (must = 100%)</p>
            <div className="space-y-3">
              {(
                [
                  { key: 'coldPct', label: 'Cold', color: 'bg-slate-500' },
                  { key: 'warmPct', label: 'Warm', color: 'bg-warning' },
                  { key: 'hotPct', label: 'Hot', color: 'bg-positive' },
                ] as const
              ).map(({ key, label, color }) => (
                <div key={key}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${color}`} />
                      <span className="text-xs text-slate-400">{label}</span>
                    </div>
                    <span className="text-xs font-700 text-white tabular-nums">{kpis[key]}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={kpis[key]}
                    onChange={(e) => handlePctChange(key, Number(e.target.value))}
                    className="w-full h-1.5 appearance-none rounded-full cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, ${key === 'coldPct' ? '#64748b' : key === 'warmPct' ? '#f59e0b' : '#22c55e'} 0%, ${key === 'coldPct' ? '#64748b' : key === 'warmPct' ? '#f59e0b' : '#22c55e'} ${kpis[key]}%, #2a3a5c ${kpis[key]}%, #2a3a5c 100%)`,
                    }}
                  />
                </div>
              ))}
              {/* Sum indicator */}
              <div className={`text-right text-[10px] font-600 ${kpis.coldPct + kpis.warmPct + kpis.hotPct === 100 ? 'text-positive' : 'text-danger'}`}>
                Total: {kpis.coldPct + kpis.warmPct + kpis.hotPct}%
                {kpis.coldPct + kpis.warmPct + kpis.hotPct !== 100 && ' ⚠ must equal 100%'}
              </div>
            </div>
          </div>

          <SliderInput
            label="Touch duration (min/touch)"
            value={kpis.touchDuration}
            min={2}
            max={30}
            unit="min"
            onChange={(v) => onChange('touchDuration', v)}
          />
        </div>
      </div>

      {/* Group 3 — BDR Math */}
      <div>
        <GroupLabel number="3" title="BDR Math" />
        <div className="space-y-5">
          <SliderInput
            label="BDR outreach hours/week"
            value={kpis.bdrWeeklyHours}
            min={10}
            max={40}
            unit="h"
            onChange={(v) => onChange('bdrWeeklyHours', v)}
          />
        </div>
        {/* BDR callout */}
        <div className="mt-4 p-3 rounded-xl bg-accent/10 border border-accent/20 text-center">
          <p className="text-xs text-slate-400 mb-1">BDRs needed to fill AE calendar</p>
          <p className="text-3xl font-800 text-accent tabular-nums">{bdrsNeeded}</p>
        </div>
      </div>
    </div>
  )
}
