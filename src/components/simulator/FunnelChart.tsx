import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts'
import { SalesCalcResult } from '../../hooks/useSalesCalc'
import { KpiState } from '../../data/defaults'

interface Props {
  calc: SalesCalcResult
  kpis: KpiState
}

const COLD_COLOR = '#64748b'
const WARM_COLOR = '#f59e0b'
const HOT_COLOR = '#22c55e'

function StatCard({
  label,
  value,
  sub,
  highlight,
}: {
  label: string
  value: string
  sub?: string
  highlight?: 'positive' | 'danger' | 'accent'
}) {
  const colorMap = { positive: 'text-positive', danger: 'text-danger', accent: 'text-accent' }
  return (
    <div className="bg-navy-700 border border-navy-600 rounded-xl p-3 flex-1 text-center">
      <p className="text-[10px] text-slate-400 mb-0.5 leading-snug">{label}</p>
      <p className={`text-xl font-extrabold tabular-nums ${highlight ? colorMap[highlight] : 'text-white'}`}>
        {value}
      </p>
      {sub && <p className="text-[10px] text-slate-500 mt-0.5">{sub}</p>}
    </div>
  )
}

export default function FunnelChart({ calc, kpis }: Props) {
  // 4-stage funnel: Touches → Lead Pool → Connections → Demos Booked
  const funnelData = [
    {
      stage: 'Touches',
      cold: calc.cold.totalTouches,
      warm: calc.warm.totalTouches,
      hot: calc.hot.totalTouches,
    },
    {
      stage: 'Lead Pool',
      cold: calc.cold.leads,
      warm: calc.warm.leads,
      hot: calc.hot.leads,
    },
    {
      stage: 'Connections',
      cold: calc.cold.connections,
      warm: calc.warm.connections,
      hot: calc.hot.connections,
    },
    {
      stage: 'Demos Booked',
      cold: calc.cold.demos,
      warm: calc.warm.demos,
      hot: calc.hot.demos,
    },
  ]

  const overallConvPct =
    kpis.monthlyLeads > 0 ? Math.round((calc.totalDemos / kpis.monthlyLeads) * 100) : 0

  return (
    <div className="flex flex-col h-full px-5 py-5 gap-4 overflow-y-auto">

      {/* ── Funnel Bar Chart ─────────────────────────── */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-white">Pipeline Funnel — Touches → Connections → Demos</h3>
          <div className="flex items-center gap-3">
            {[
              { color: COLD_COLOR, label: 'Cold' },
              { color: WARM_COLOR, label: 'Warm' },
              { color: HOT_COLOR, label: 'Hot' },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm" style={{ background: color }} />
                <span className="text-[11px] text-slate-400">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={funnelData} margin={{ top: 8, right: 12, left: -10, bottom: 0 }} barSize={56}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a3a5c" vertical={false} />
            <XAxis dataKey="stage" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                background: '#1e2a45',
                border: '1px solid #2a3a5c',
                borderRadius: '8px',
                fontSize: '12px',
                color: '#f8fafc',
              }}
              cursor={{ fill: 'rgba(59,130,246,0.05)' }}
            />
            <ReferenceLine
              y={calc.demosPerMonth}
              stroke={calc.isOverCapacity ? '#ef4444' : '#22c55e'}
              strokeDasharray="6 3"
              strokeWidth={2}
              label={{
                value: `AE capacity: ${calc.demosPerMonth}/mo`,
                position: 'insideTopRight',
                fill: calc.isOverCapacity ? '#ef4444' : '#22c55e',
                fontSize: 11,
                fontWeight: 600,
              }}
            />
            <Bar dataKey="cold" name="Cold" stackId="a" fill={COLD_COLOR} />
            <Bar dataKey="warm" name="Warm" stackId="a" fill={WARM_COLOR} />
            <Bar dataKey="hot"  name="Hot"  stackId="a" fill={HOT_COLOR} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ── Per-tier breakdown table ──────────────────── */}
      <div className="bg-navy-800 border border-navy-600 rounded-xl overflow-hidden">
        <div className="grid grid-cols-6 gap-0 text-[10px] font-bold text-slate-500 uppercase tracking-wide px-3 py-2 border-b border-navy-600">
          <span>Tier</span>
          <span className="text-right">Leads</span>
          <span className="text-right">Touches</span>
          <span className="text-right">Connects</span>
          <span className="text-right">→Demo</span>
          <span className="text-right">Demos</span>
        </div>
        {[
          { label: 'Cold', dot: 'bg-slate-500', tier: calc.cold, connectToDemo: kpis.coldConnectToDemo },
          { label: 'Warm', dot: 'bg-warning',   tier: calc.warm, connectToDemo: kpis.warmConnectToDemo },
          { label: 'Hot',  dot: 'bg-positive',  tier: calc.hot,  connectToDemo: kpis.hotConnectToDemo  },
        ].map(({ label, dot, tier, connectToDemo }) => (
          <div key={label} className="grid grid-cols-6 gap-0 px-3 py-2 text-xs border-b border-navy-600/50 last:border-0">
            <div className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
              <span className="text-slate-300 font-medium">{label}</span>
            </div>
            <span className="text-right text-slate-400 tabular-nums">{tier.leads}</span>
            <span className="text-right text-slate-400 tabular-nums">{tier.totalTouches}</span>
            <span className="text-right text-slate-400 tabular-nums">{tier.connections}</span>
            <span className="text-right text-slate-400 tabular-nums">{connectToDemo}%</span>
            <span className="text-right font-bold text-white tabular-nums">{tier.demos}</span>
          </div>
        ))}
        <div className="grid grid-cols-6 gap-0 px-3 py-2 bg-navy-700/50 text-xs font-bold">
          <span className="text-slate-300">Total</span>
          <span className="text-right text-white tabular-nums">{kpis.monthlyLeads}</span>
          <span className="text-right text-accent tabular-nums">{calc.totalTouches}</span>
          <span className="text-right text-white tabular-nums">{calc.totalConnections}</span>
          <span className="text-right text-slate-400 tabular-nums">~{calc.blendedConnectToDemo}%</span>
          <span className="text-right text-accent tabular-nums">{calc.totalDemos}</span>
        </div>
      </div>

      {/* ── Outreach hours bar ────────────────────────── */}
      <div className="bg-navy-800 border border-navy-600 rounded-xl p-3">
        <p className="text-[10px] font-bold text-slate-300 mb-2 uppercase tracking-wider">
          Monthly Outreach Hours (BDR)
        </p>
        <div className="space-y-2">
          {[
            { label: 'Cold outreach', hours: calc.cold.outreachHours, color: COLD_COLOR },
            { label: 'Warm outreach', hours: calc.warm.outreachHours, color: WARM_COLOR },
            { label: 'Hot outreach',  hours: calc.hot.outreachHours,  color: HOT_COLOR  },
          ].map(({ label, hours, color }) => (
            <div key={label}>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-slate-400">{label}</span>
                <span className="text-white font-semibold tabular-nums">{hours}h</span>
              </div>
              <div className="h-1.5 bg-navy-600 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: calc.totalOutreachHours > 0
                      ? `${(hours / calc.totalOutreachHours) * 100}%`
                      : '0%',
                    background: color,
                  }}
                />
              </div>
            </div>
          ))}
          <div className="flex justify-between pt-1 border-t border-navy-600">
            <span className="text-xs text-slate-300 font-semibold">Total outreach hrs/month</span>
            <span className="text-xs text-white font-extrabold tabular-nums">{calc.totalOutreachHours}h</span>
          </div>
        </div>
      </div>

      {/* ── Summary stat cards ───────────────────────── */}
      <div className="flex gap-2">
        <StatCard label="Total touches/mo" value={`${calc.totalTouches}`} sub="all channels" highlight="accent" />
        <StatCard label="Connections/mo" value={`${calc.totalConnections}`} sub={`~${calc.blendedTouchesToConnect} touches each`} />
        <StatCard
          label="Demos generated"
          value={`${calc.totalDemos}/mo`}
          sub={`${overallConvPct}% lead→demo`}
          highlight={calc.isOverCapacity ? 'positive' : 'danger'}
        />
        <StatCard label="BDRs needed" value={`${calc.bdrsNeeded}`} sub="to fill AE calendar" highlight="accent" />
      </div>

      {/* ── Status bar ───────────────────────────────── */}
      <div
        className={`rounded-xl p-3 flex items-center gap-3 ${
          calc.isOverCapacity
            ? 'bg-positive/10 border border-positive/20'
            : 'bg-danger/10 border border-danger/20'
        }`}
      >
        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${calc.isOverCapacity ? 'bg-positive' : 'bg-danger'}`} />
        <p className={`text-xs font-medium ${calc.isOverCapacity ? 'text-positive' : 'text-danger'}`}>
          {calc.isOverCapacity
            ? `Pipeline generates ${calc.pipelineGap} more demos than AE capacity — ${calc.bdrsNeeded} BDR${calc.bdrsNeeded !== 1 ? 's' : ''} needed. Consider a second AE.`
            : `Pipeline is ${calc.pipelineGap} demos short of filling Sameet's calendar — increase lead volume or improve connection rates.`}
        </p>
      </div>

    </div>
  )
}
