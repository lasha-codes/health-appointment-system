import { db } from '@/data/db'
import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
  const body = await request.json()
  try {
    if (!body.name) {
      return NextResponse.json({
        message: 'Please provide an name for the data u want to retrieve',
      })
    }
    if (body.name === 'doctor') {
      const doctors = await db.doctor.findMany()
      return NextResponse.json({ doctors })
    }
    return NextResponse.json({ message: 'Please provider correct model name' })
  } catch (err: any) {
    return NextResponse.json({ error: err.message })
  }
}

export const DELETE = async () => {
  try {
    const deleted_doctors = await db.doctor.deleteMany()
    return NextResponse.json({ deleted_doctors })
  } catch (err: any) {
    return NextResponse.json({ error: err.message })
  }
}
