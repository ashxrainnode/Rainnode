export interface GamePlan {
  id: string
  name: string
  type: string
  ram: string
  cpu: string
  storage: string
  backup?: string
  ports?: string
  databases?: string
  price: number
  orderLink: string
}

export interface Game {
  id: string
  name: string
  description: string
  icon: string
  banner: string
  featured: boolean
  startingAt: string
  primaryColor: string
  plans: {
    [key: string]: GamePlan[]
  }
}

export interface GameLocation {
  id: string
  name: string
  flag: string
  availablePlanTypes: string[]
}

export interface PlanType {
  id: string
  name: string
  image: string
}

export interface GamesConfig {
  planTypes: PlanType[]
  locations: GameLocation[]
  games: Game[]
}
