export interface KpiState {
  hoursPerWeek: number
  demoDuration: number
  monthlyLeads: number
  coldPct: number
  warmPct: number
  hotPct: number
  coldRate: number
  warmRate: number
  hotRate: number
  coldTouches: number
  warmTouches: number
  hotTouches: number
  touchDuration: number
  bdrWeeklyHours: number
}

export const DEFAULT_KPIS: KpiState = {
  hoursPerWeek: 10,
  demoDuration: 45,
  monthlyLeads: 80,
  coldPct: 50,
  warmPct: 30,
  hotPct: 20,
  coldRate: 5,
  warmRate: 20,
  hotRate: 60,
  coldTouches: 8,
  warmTouches: 4,
  hotTouches: 2,
  touchDuration: 8,
  bdrWeeklyHours: 30,
}
