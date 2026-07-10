export interface DomainPlan {
  id: string
  tld: string
  price: number
  period: string
  badge?: string | null
  orderLink: string
}

export interface DomainConfig {
  plans: DomainPlan[]
}
