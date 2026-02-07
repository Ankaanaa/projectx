export interface Car {
  brand: string
  model: string
  releaseYear: number
  photo: string
  description: string
  PriceDaysEuro: number
  PriceDaysDollar: number
  classCar: string
  isElectric: boolean
  isAvailable: boolean
  dateStartBooked: null | string
  dateEndBooked: null | string
  batteryCapacity: number
  transmission: Transmission
  motor: Motor
  performance: Performance
  dimensions: Dimensions
  weight: Weight
}

export interface Cars {
  meta: Meta

  cars: Car[]
}
export interface Meta {
  isCurrencyEuro: boolean
  isCurrencyDollar: boolean
}
interface Transmission {
  type: string
  gears: number
  drive: string
}

interface Motor {
  type: string
  maxPower: number
  powerKW: number
  torque: number
}

interface Performance {
  acceleration: number
  maxSpeed: number
}

interface Dimensions {
  width: number
  length: number
  height: number
}

interface Weight {
  curb: number
  gross: number
}
