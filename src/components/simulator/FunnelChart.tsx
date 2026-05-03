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
  const colorMap = {
    positive: 'text-positive',
    danger: 'text-danger',
    accent: 'text-accent',
  }
  return (
    <div className="bg-navy-700 border border-navy-600 rounded-xl p-4 flex-1 text-center">
      <p className="text-xs text-slate-400 mb-1 leading-snug">{label}</p>
      <p className={`text-2xl font-800 tabular-nums ${highlight ? colorMap[highlight] : 'text-white'}`}>
        {value}
      </p>
      {sub && <p className="text-[10px] text-slate-500 mt-0.5">{sub}</p>}
    </div>
  )
}

export default function FunnelChart({ calc, kpis }: Props) {
  const funnelData = [
    {
      stage: 'Lead Pool',
      total: kpis.monthlyLeads,
      cold: Math.round(kpis.monthlyLeads * (kpis.coldPct / 100)),
      warm: Math.round(kpis.monthlyLeads * (kpis.warmPct / 100)),
      hot: Math.round(kpis.monthlyLeads * (kpis.hotPct / 100)),
    },
    {
      stage: 'In Sequence',
      total: Math.round(kpis.monthlyLeads * 0.8),
      cold: Math.round(kpis.monthlyLeads * (kpis.coldPct / 100) * 0.8),
      warm: Math.round(kpis.monthlyLeads * (kpis.warmPct / 100) * 0.9),
      hot: Math.round(kpis.monthlyLeads * (kpis.hotPct / 100) * 0.95),
    },
    {
      stage: 'Engaged',
      total: Math.round(
        kpis.monthlyLeads * (kpis.coldPct / 100) * 0.2 +
          kpis.monthlyLeads * (kpis.warmPct / 100) * 0.45 +
          kpis.monthlyLeads * (kpis.hotPct / 100) * 0.8,
      ),
      cold: Math.round(kpis.monthlyLeads * (kpis.coldPct / 100) * 0.2),
      warm: Math.round(kpis.monthlyLeads * (kpis.warmPct / 100) * 0.45),
      hot: Math.round(kpis.monthlyLeads * (kpis.hotPct / 100) * 0.8),
    },
    {
      stage: 'Demos Booked',
      total: calc.totalDemos,
      cold: calc.coldDemos,
      warm: calc.warmDemos,
      hot: calc.hotDemos,
    },
  ]

  const conversionRate =
    kpis.monthlyLeads > 0 ? Math.round((calc.totalDemos / kpis.monthlyLeads) * 100) : 0

  return (
    <div className="flex flex-col h-full px-6 py-5 gap-4 overflow-y-auto">
      {/* Chart */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-700 text-white">Pipeline Funnel — Lead to Demo</h3>
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

        <ResponsiveContainer width="100%" height={240}>
          <BarChart
            data={funnelData}
            margin={{ top: 8, right: 16, left: -10, bottom: 0 }}
            barSize={52}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#2a3a5c" vertical={false} />
            <XAxis
              dataKey="stage"
              tick={{ fill: '#94a3b8', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: '#64748b', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
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
            <Bar dataKey="cold" name="Cold" stackId="a" fill={COLD_COLOR} radius={[0, 0, 0, 0]} />
            <Bar dataKey="warm" name="Warm" stackId="a" fill={WARM_COLOR} radius={[0, 0, 0, 0]} />
            <Bar dataKey="hot" name="Hot" stackId="a" fill={HOT_COLOR} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Outreach breakdown mini chart */}
      <div className="bg-navy-800 border border-navy-600 rounded-xl p-3">
        <p className="text-xs font-700 text-slate-300 mb-3 uppercase tracking-wider">
          Monthly Outreach Hours Breakdown
        </p>
        <div className="space-y-2">
          {[
            { label: 'Cold leads outreach', hours: calc.coldOutreachHours, color: COLD_COLOR, max: calc.totalOutreachHours },
            { label: 'Warm leads outreach', hours: calc.warmOutreachHours, color: WARM_COLOR, max: calc.totalOutreachHours },
            { label: 'Hot leads outreach', hours: calc.hotOutreachHours, color: HOT_COLOR, max: calc.totalOutreachHours },
          ].map(({ label, hours, color, max }) => (
            <div key={label}>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-slate-400">{label}</span>
                <span className="text-white font-600 tabular-nums">{hours}h</span>
              </div>
              <div className="h-1.5 bg-navy-600 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: max > 0 ? `${(hours / max) * 100}%` : '0%',
                    background: color,
                  }}
                />
              </div>
            </div>
          ))}
          <div className="flex justify-between pt-1 border-t border-navy-600 mt-1">
            <span className="text-xs text-slate-300 font-600">Total outreach hours/month</span>
            <span className="text-xs text-white font-800 tabular-nums">{calc.totalOutreachHours}h</span>
          </div>
        </div>
      </div>

      {/* Summary stat cards */}
      <div className="flex gap-3">
        <StatCard
          label="AE handles"
          value={`${calc.demosPerMonth}/mo`}
          sub="demo capacity"
          highlight="accent"
        />
        <StatCard
          label="Pipeline generates"
          value={`${calc.totalDemos}/mo`}
          sub={`${conversionRate}% conv. rate`}
          highlight={calc.isOverCapacity ? 'positive' : 'danger'}
        />
        <StatCard
          label="BDRs needed"
          value={`${calc.bdrsNeeded}`}
          sub="to fill AE calendar"
          highlight="accent"
        />
      </div>

      {/* Status bar */}
      <div
        className={`rounded-xl p-3 flex items-center gap-3 ${
          calc.isOverCapacity
            ? 'bg-positive/10 border border-positive/20'
            : 'bg-danger/10 border border-danger/20'
        }`}
      >
        <div
          className={`w-2 h-2 rounded-full flex-shrink-0 ${
            calc.isOverCapacity ? 'bg-positive' : 'bg-danger'
          }`}
        />
        <p
          className={`text-xs font-500 ${
            calc.isOverCapacity ? 'text-positive' : 'text-danger'
          }`}
        >
          {calc.isOverCapacity
            ? `Pipeline generates ${calc.pipelineGap} more demos than AE capacity — you need ${calc.bdrsNeeded} BDR${calc.bdrsNeeded !== 1 ? 's' : ''} and potentially a second AE.`
            : `Pipeline is ${calc.pipelineGap} demos short of filling Sameet's calendar — increase lead volume or conversion rates.`}
        </p>
      </div>
    </div>
  )
}
