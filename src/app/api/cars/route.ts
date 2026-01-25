import { Cars, Meta } from '@/app/types/cars'
import fs from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'

const filePath = path.join(process.cwd(), 'data', 'cars.json')

const readDB = () => {
  const raw = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(raw)
}

const writeDB = (data: any) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
}

export async function GET() {
  const data = readDB()
  if (!data) {
    return NextResponse.json({ error: 'not found meta' }, { status: 400 })
  }
  return NextResponse.json(data)
}

type PatchMetaBody = Partial<Meta>
export async function PATCH(req: NextRequest) {
  const changeParams: PatchMetaBody = await req.json()
  const data: Cars = readDB()

  if (typeof changeParams.isCurrencyDollar === 'boolean') {
    data.meta.isCurrencyDollar = changeParams.isCurrencyDollar
  }
  if (typeof changeParams.isCurrencyEuro === 'boolean') {
    data.meta.isCurrencyEuro = changeParams.isCurrencyEuro
  }

  writeDB(data)
  return NextResponse.json({ success: true })
}
