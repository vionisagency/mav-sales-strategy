import { KpiState } from '../data/defaults'

export interface TierMetrics {
  leads: number
  totalTouches: number     // all attempts: leads × touchesToConnect
  connections: number      // leads that converted to a live conversation
  demos: number
  outreachHours: number
  touchesPerDemo: number   // derived: touchesToConnect / (connectToDemo / 100)
  overallConversionPct: number
}

export interface SalesCalcResult {
  demosPerWeek: number
  demosPerMonth: number
  cold: TierMetrics
  warm: TierMetrics
  hot: TierMetrics
  totalTouches: number
  totalConnections: number
  totalDemos: number
  totalOutreachHours: number
  bdrCapacityHours: number
  bdrsNeeded: number
  pipelineGap: number
  isOverCapacity: boolean
  blendedTouchesToConnect: number
  blendedConnectToDemo: number
}

function tierMetrics(
  leads: number,
  pct: number,
  touchesToConnect: number,
  connectToDemo: number,
  minutesPerTouch: number,
): TierMetrics {
  const tierLeads = leads * (pct / 100)
  const totalTouches = Math.round(tierLeads * touchesToConnect)
  const connections = tierLeads
  const demos = Math.round(connections * (connectToDemo / 100))
  const outreachHours = (tierLeads * touchesToConnect * minutesPerTouch) / 60
  const touchesPerDemo = connectToDemo > 0
    ? Math.round(touchesToConnect / (connectToDemo / 100))
    : 0

  return {
    leads: Math.round(tierLeads),
    totalTouches,
    connections: Math.round(connections),
    demos,
    outreachHours: Math.round(outreachHours * 10) / 10,
    touchesPerDemo,
    overallConversionPct: connectToDemo,
  }
}

export function useSalesCalc(kpis: KpiState): SalesCalcResult {
  const demosPerWeek = Math.floor((kpis.hoursPerWeek * 60) / kpis.demoDuration)
  const demosPerMonth = Math.round(demosPerWeek * 4.33)

  const cold = tierMetrics(kpis.monthlyLeads, kpis.coldPct, kpis.coldTouchesToConnect, kpis.coldConnectToDemo, kpis.minutesPerTouch)
  const warm = tierMetrics(kpis.monthlyLeads, kpis.warmPct, kpis.warmTouchesToConnect, kpis.warmConnectToDemo, kpis.minutesPerTouch)
  const hot  = tierMetrics(kpis.monthlyLeads, kpis.hotPct,  kpis.hotTouchesToConnect,  kpis.hotConnectToDemo,  kpis.minutesPerTouch)

  const totalTouches     = cold.totalTouches + warm.totalTouches + hot.totalTouches
  const totalConnections = cold.connections  + warm.connections  + hot.connections
  const totalDemos       = cold.demos        + warm.demos        + hot.demos
  const totalOutreachHours = Math.round((cold.outreachHours + warm.outreachHours + hot.outreachHours) * 10) / 10

  const bdrCapacityHours = Math.round(kpis.bdrWeeklyHours * 4.33 * 10) / 10
  const bdrsNeeded       = Math.max(1, Math.ceil(totalOutreachHours / bdrCapacityHours))

  const pipelineGap    = Math.abs(totalDemos - demosPerMonth)
  const isOverCapacity = totalDemos > demosPerMonth

  const totalLeads = cold.leads + warm.leads + hot.leads
  const blendedTouchesToConnect = totalLeads > 0
    ? Math.round((cold.leads * kpis.coldTouchesToConnect + warm.leads * kpis.warmTouchesToConnect + hot.leads * kpis.hotTouchesToConnect) / totalLeads)
    : 0
  const blendedConnectToDemo = totalLeads > 0
    ? Math.round((cold.leads * kpis.coldConnectToDemo + warm.leads * kpis.warmConnectToDemo + hot.leads * kpis.hotConnectToDemo) / totalLeads)
    : 0

  return {
    demosPerWeek, demosPerMonth,
    cold, warm, hot,
    totalTouches, totalConnections, totalDemos, totalOutreachHours,
    bdrCapacityHours, bdrsNeeded,
    pipelineGap, isOverCapacity,
    blendedTouchesToConnect, blendedConnectToDemo,
  }
}
