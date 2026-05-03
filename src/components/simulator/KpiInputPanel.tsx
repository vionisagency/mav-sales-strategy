import { KpiState } from '../../data/defaults'

interface Props {
  kpis: KpiState
  onChange: (key: keyof KpiState, value: number) => void
  demosPerWeek: number
  demosPerMonth: number
  bdrsNeeded: number
}

function SliderRow({
  label,
  value,
  min,
  max,
  step = 1,
  unit,
  color,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step?: number
  unit?: string
  color?: string
  onChange: (v: number) => void
}) {
  const pct = ((value - min) / (max - min)) * 100
  const trackColor = color ?? '#3b82f6'
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label className="text-xs text-slate-400 font-medium">{label}</label>
        <span className="text-xs font-bold text-white tabular-nums">
          {value}{unit && <span className="text-slate-500 font-normal ml-0.5">{unit}</span>}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 appearance-none rounded-full cursor-pointer"
        style={{
          background: `linear-gradient(to right, ${trackColor} 0%, ${trackColor} ${pct}%, #2a3a5c ${pct}%, #2a3a5c 100%)`,
        }}
      />
    </div>
  )
}

function GroupLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-5 h-5 rounded-full bg-accent/20 text-accent text-[10px] font-extrabold flex items-center justify-center flex-shrink-0">
        {number}
      </span>
      <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">{title}</p>
    </div>
  )
}

const TIER_CONFIG = [
  {
    label: 'Cold',
    color: '#64748b',
    dot: 'bg-slate-500',
    touchKey: 'coldTouchesToConnect' as keyof KpiState,
    demoKey: 'coldConnectToDemo' as keyof KpiState,
    pctKey: 'coldPct' as keyof KpiState,
  },
  {
    label: 'Warm',
    color: '#f59e0b',
    dot: 'bg-warning',
    touchKey: 'warmTouchesToConnect' as keyof KpiState,
    demoKey: 'warmConnectToDemo' as keyof KpiState,
    pctKey: 'warmPct' as keyof KpiState,
  },
  {
    label: 'Hot',
    color: '#22c55e',
    dot: 'bg-positive',
    touchKey: 'hotTouchesToConnect' as keyof KpiState,
    demoKey: 'hotConnectToDemo' as keyof KpiState,
    pctKey: 'hotPct' as keyof KpiState,
  },
]

export default function KpiInputPanel({ kpis, onChange, demosPerWeek, demosPerMonth, bdrsNeeded }: Props) {
  const handlePctChange = (key: 'coldPct' | 'warmPct' | 'hotPct', newVal: number) => {
    const others = (['coldPct', 'warmPct', 'hotPct'] as const).filter((k) => k !== key)
    const remaining = 100 - newVal
    const currentSum = kpis[others[0]] + kpis[others[1]]
    if (currentSum === 0) {
      onChange(others[0], Math.floor(remaining / 2))
      onChange(others[1], remaining - Math.floor(remaining / 2))
    } else {
      const ratio = kpis[others[0]] / currentSum
      const a = Math.round(remaining * ratio)
      onChange(others[0], Math.max(0, a))
      onChange(others[1], Math.max(0, remaining - a))
    }
    onChange(key, newVal)
  }

  const pctSum = kpis.coldPct + kpis.warmPct + kpis.hotPct

  return (
    <div className="overflow-y-auto px-5 py-5 space-y-6">

      {/* ── Group 1: AE Capacity ───────────────────────────── */}
      <div>
        <GroupLabel number="1" title="AE Capacity" />
        <div className="space-y-4">
          <SliderRow
            label="Sameet's demo hours/week"
            value={kpis.hoursPerWeek} min={1} max={40} unit="h"
            onChange={(v) => onChange('hoursPerWeek', v)}
          />
          <SliderRow
            label="Avg demo duration"
            value={kpis.demoDuration} min={15} max={120} step={15} unit="min"
            onChange={(v) => onChange('demoDuration', v)}
          />
        </div>
        <div className="mt-3 px-3 py-2 rounded-lg bg-navy-800 border border-navy-600 flex items-center justify-between">
          <span className="text-xs text-slate-400">AE capacity</span>
          <span className="text-sm font-bold text-accent tabular-nums">
            {demosPerWeek}/wk · {demosPerMonth}/mo
          </span>
        </div>
      </div>

      {/* ── Group 2: Lead Pool ────────────────────────────── */}
      <div>
        <GroupLabel number="2" title="Lead Pool" />
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs text-slate-400 font-medium">Total leads/month</label>
              <span className="text-xs font-bold text-white tabular-nums">{kpis.monthlyLeads}</span>
            </div>
            <input
              type="number"
              value={kpis.monthlyLeads}
              min={0}
              max={2000}
              onChange={(e) => onChange('monthlyLeads', Math.max(0, Number(e.target.value)))}
              className="w-full bg-navy-800 border border-navy-600 rounded-lg px-3 py-1.5 text-white text-sm font-semibold focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wide pt-1">
            Lead quality split
          </p>
          {TIER_CONFIG.map(({ label, color, dot, pctKey }) => (
            <div key={label}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${dot}`} />
                  <span className="text-xs text-slate-400">{label}</span>
                </div>
                <span className="text-xs font-bold text-white tabular-nums">{kpis[pctKey]}%</span>
              </div>
              <input
                type="range" min={0} max={100}
                value={kpis[pctKey]}
                onChange={(e) => handlePctChange(pctKey as 'coldPct' | 'warmPct' | 'hotPct', Number(e.target.value))}
                className="w-full h-1.5 appearance-none rounded-full cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${color} 0%, ${color} ${kpis[pctKey]}%, #2a3a5c ${kpis[pctKey]}%, #2a3a5c 100%)`,
                }}
              />
            </div>
          ))}
          <p className={`text-right text-[10px] font-semibold ${pctSum === 100 ? 'text-positive' : 'text-danger'}`}>
            Total: {pctSum}%{pctSum !== 100 && ' — must equal 100%'}
          </p>
        </div>
      </div>

      {/* ── Group 3: Per-Tier Conversion KPIs ────────────── */}
      <div>
        <GroupLabel number="3" title="Conversion KPIs" />
        <p className="text-[10px] text-slate-500 leading-relaxed mb-3">
          No-answers count as touches. Set per tier so the math reflects your real pipeline.
        </p>

        <div className="space-y-4">
          {TIER_CONFIG.map(({ label, color, dot, touchKey, demoKey }) => (
            <div
              key={label}
              className="p-3 rounded-xl border border-navy-600 bg-navy-800/60"
            >
              {/* Tier header */}
              <div className="flex items-center gap-1.5 mb-3">
                <span className={`w-2 h-2 rounded-full ${dot}`} />
                <span className="text-xs font-bold text-white">{label} Leads</span>
                {/* Derived: overall conversion */}
                <span className="ml-auto text-[10px] text-slate-500 tabular-nums">
                  {Math.round((kpis[demoKey] as number))}% connect → demo
                </span>
              </div>

              <div className="space-y-3">
                <SliderRow
                  label="Touches to get 1 connection"
                  value={kpis[touchKey] as number}
                  min={1} max={30}
                  color={color}
                  onChange={(v) => onChange(touchKey, v)}
                />
                <SliderRow
                  label="Connections → Demo (%)"
                  value={kpis[demoKey] as number}
                  min={1} max={100} unit="%"
                  color={color}
                  onChange={(v) => onChange(demoKey, v)}
                />
              </div>

              {/* Derived insight */}
              <div className="mt-2 pt-2 border-t border-navy-600 flex justify-between text-[10px] text-slate-500">
                <span>Touches per demo booked</span>
                <span className="font-bold text-slate-300 tabular-nums">
                  {kpis[demoKey] > 0
                    ? Math.round((kpis[touchKey] as number) / ((kpis[demoKey] as number) / 100))
                    : '—'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Group 4: Touch Effort ─────────────────────────── */}
      <div>
        <GroupLabel number="4" title="Touch Effort" />
        <SliderRow
          label="Avg minutes per touch (all channels)"
          value={kpis.minutesPerTouch} min={1} max={30} unit="min"
          onChange={(v) => onChange('minutesPerTouch', v)}
        />
      </div>

      {/* ── Group 5: BDR Capacity ─────────────────────────── */}
      <div>
        <GroupLabel number="5" title="BDR Capacity" />
        <SliderRow
          label="BDR outreach hours/week"
          value={kpis.bdrWeeklyHours} min={10} max={40} unit="h"
          onChange={(v) => onChange('bdrWeeklyHours', v)}
        />
        <div className="mt-3 p-3 rounded-xl bg-accent/10 border border-accent/20 text-center">
          <p className="text-xs text-slate-400 mb-1">BDRs needed to fill AE calendar</p>
          <p className="text-3xl font-extrabold text-accent tabular-nums">{bdrsNeeded}</p>
        </div>
      </div>

    </div>
  )
}
