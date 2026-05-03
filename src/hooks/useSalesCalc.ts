import { KpiState } from '../data/defaults'

export interface SalesCalcResult {
  demosPerWeek: number
  demosPerMonth: number
  coldDemos: number
  warmDemos: number
  hotDemos: number
  totalDemos: number
  coldOutreachHours: number
  warmOutreachHours: number
  hotOutreachHours: number
  totalOutreachHours: number
  bdrCapacityHours: number
  bdrsNeeded: number
  pipelineGap: number
  isOverCapacity: boolean
}

export function useSalesCalc(kpis: KpiState): SalesCalcResult {
  const demosPerWeek = Math.floor((kpis.hoursPerWeek * 60) / kpis.demoDuration)
  const demosPerMonth = Math.round(demosPerWeek * 4.33)

  const coldDemos = kpis.monthlyLeads * (kpis.coldPct / 100) * (kpis.coldRate / 100)
  const warmDemos = kpis.monthlyLeads * (kpis.warmPct / 100) * (kpis.warmRate / 100)
  const hotDemos = kpis.monthlyLeads * (kpis.hotPct / 100) * (kpis.hotRate / 100)
  const totalDemos = Math.round(coldDemos + warmDemos + hotDemos)

  const coldOutreachHours =
    (kpis.monthlyLeads * (kpis.coldPct / 100) * kpis.coldTouches * kpis.touchDuration) / 60
  const warmOutreachHours =
    (kpis.monthlyLeads * (kpis.warmPct / 100) * kpis.warmTouches * kpis.touchDuration) / 60
  const hotOutreachHours =
    (kpis.monthlyLeads * (kpis.hotPct / 100) * kpis.hotTouches * kpis.touchDuration) / 60
  const totalOutreachHours = coldOutreachHours + warmOutreachHours + hotOutreachHours

  const bdrCapacityHours = kpis.bdrWeeklyHours * 4.33
  const bdrsNeeded = Math.ceil(totalOutreachHours / bdrCapacityHours)

  const pipelineGap = totalDemos - demosPerMonth
  const isOverCapacity = totalDemos > demosPerMonth

  return {
    demosPerWeek,
    demosPerMonth,
    coldDemos: Math.round(coldDemos),
    warmDemos: Math.round(warmDemos),
    hotDemos: Math.round(hotDemos),
    totalDemos,
    coldOutreachHours: Math.round(coldOutreachHours * 10) / 10,
    warmOutreachHours: Math.round(warmOutreachHours * 10) / 10,
    hotOutreachHours: Math.round(hotOutreachHours * 10) / 10,
    totalOutreachHours: Math.round(totalOutreachHours * 10) / 10,
    bdrCapacityHours: Math.round(bdrCapacityHours * 10) / 10,
    bdrsNeeded,
    pipelineGap: Math.abs(pipelineGap),
    isOverCapacity,
  }
}
