import { Car } from '@/app/types/cars'
import fs from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'

interface selectionUserFilter {
  brand?: string | null
  model?: string | null
  releaseYear?: number | null
  priceMax?: number | null
  priceMin?: number | null
  classCar?: string | null
  isElectric?: boolean | null
}

const filePath = path.join(process.cwd(), 'data', 'utf-8')

const readDB = () => {
  const raw = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(raw)
}
export async function GET(req: NextRequest) {
  const data = readDB()

  if (!data) {
    return NextResponse.json({ error: 'not found data', status: 400 })
  }
  const { searchParams } = new URL(req.url)

  let selectionUserFilter: selectionUserFilter = {
    brand: searchParams.get('brand'),
    model: searchParams.get('model'),
    releaseYear: searchParams.get('releaseYear')
      ? Number(searchParams.get('releaseYear'))
      : null,
    priceMax: searchParams.get('priceMax')
      ? Number(searchParams.get('priceMax'))
      : null,
    priceMin: searchParams.get('priceMin')
      ? Number(searchParams.get('priceMin'))
      : null,
    classCar: searchParams.get('classCar'),
    isElectric: searchParams.get('isElectric')
      ? Boolean(searchParams.get('isElectric'))
      : null,
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
