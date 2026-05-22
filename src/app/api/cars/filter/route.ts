import { Car } from '@/app/types/cars'
import fs from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'

//{ min: number | null; max: number | null }
interface selectionUserFilter {
  brand: string[] | null
  model: string[] | null
  priceRanges: string[] | null
  releaseYearRanges: string[] | null
  classCar: string[] | null
  isElectric: string[] | null
  transmissionType: string[] | null
  motorType: string[] | null
}
interface range {
  min: number | null
  max: number | null
}

const filePath = path.join(process.cwd(), 'data', 'utf-8')

const readDB = () => {
  const raw = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(raw)
}
export async function GET(req: NextRequest) {
  const data = readDB()

  if (!data.ok) {
    return NextResponse.json({ error: 'not found data', status: 400 })
  }
  const { searchParams } = new URL(req.url)
  const getParam = (key: keyof selectionUserFilter) => {
    return searchParams.get(key)
  }

  const getParamTwo = (key: keyof selectionUserFilter) => {
    return
  }
  const brandParam = getParam('brand')
  const modelParam = getParam('model')
  const releaseYearParam = getParam('releaseYearRanges')
  const classCarParam = getParam('classCar')
  const isElectricParam = getParam('isElectric')
  const priceRangeParam = getParam('priceRanges')
  const transmissionParam = getParam('transmissionType')
  const motorParam = getParam('motorType')
  let selectionUserFilter: selectionUserFilter = {
    brand: brandParam ? [brandParam] : null,
    model: modelParam ? [modelParam] : null,
    releaseYearRanges: releaseYearParam ? [releaseYearParam] : null,
    priceRanges: priceRangeParam ? [priceRangeParam] : null,
    classCar: classCarParam ? [classCarParam] : null,
    isElectric: isElectricParam ? [isElectricParam] : null,
    transmissionType: transmissionParam ? [transmissionParam] : null,
    motorType: motorParam ? [motorParam] : null,
  }

  const priceKey = data.meta.isCurrencyDollar
    ? 'PriceDaysDollar'
    : 'PriceDaysEuro'

  const filterCars = data.cars.filter((car: Car) => {
    return Object.entries(selectionUserFilter).every(([key, value]) => {
      if (value === null) return true
      if (key === 'priceMax') return car[priceKey] <= value
      if (key === 'priceMin') return car[priceKey] >= value

      return car[key as keyof Car] === value
    })
  })

  return NextResponse.json(filterCars)
}
