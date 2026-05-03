export interface KpiState {
  // AE capacity
  hoursPerWeek: number
  demoDuration: number
  // Lead pool
  monthlyLeads: number
  coldPct: number
  warmPct: number
  hotPct: number
  // Per-tier: touches to get one live connection (all channels: calls incl. no-answers, email, LinkedIn)
  coldTouchesToConnect: number
  warmTouchesToConnect: number
  hotTouchesToConnect: number
  // Per-tier: % of live connections that book a demo
  coldConnectToDemo: number
  warmConnectToDemo: number
  hotConnectToDemo: number
  // Touch effort
  minutesPerTouch: number
  // BDR capacity
  bdrWeeklyHours: number
}

export const DEFAULT_KPIS: KpiState = {
  hoursPerWeek: 10,
  demoDuration: 45,
  monthlyLeads: 80,
  coldPct: 50,
  warmPct: 30,
  hotPct: 20,
  coldTouchesToConnect: 14,
  warmTouchesToConnect: 7,
  hotTouchesToConnect: 3,
  coldConnectToDemo: 15,
  warmConnectToDemo: 35,
  hotConnectToDemo: 65,
  minutesPerTouch: 6,
  bdrWeeklyHours: 30,
}
