import { db } from '../../../data/db'
import { NextResponse } from 'next/server'
import { Doctor } from '@prisma/client'
import { currentUser } from '@clerk/nextjs/server'

export const POST = async (request: Request) => {
  try {
    const [currUser, body] = await Promise.all([currentUser(), request.json()])
    const {
      name,
      email,
      phone_number,
      photo,
      services,
      working_times,
      social_links,
      summary,
    } = body
    if (!currUser) {
      return NextResponse.json({ message: 'Unauthorized request' })
    }

    const createdDoctor: Doctor = await db.doctor.create({
      data: {
        userId: currUser.id as string,
        email: email,
        name,
        image_url: photo,
        phonenumber: phone_number,
        services,
        summary,
        working_times,
        socials: social_links,
      },
    })

    return NextResponse.json({ new_doctor: createdDoctor })
  } catch (err: any) {
    return NextResponse.json({ message: err.message })
  }
}

export const GET = async () => {
  try {
    const loggedUser = await currentUser()
    if (!loggedUser) {
      return NextResponse.json({ message: 'Unauthorized request' })
    }
    const doctor = await db.doctor.findUnique({
      where: { userId: loggedUser.id },
    })
    return NextResponse.json({ profile: doctor })
  } catch (err: any) {
    return NextResponse.json({ message: err.message })
  }
}

export const DELETE = async () => {
  try {
    const sender = await currentUser()
    if (!sender) {
      return NextResponse.json({ message: 'Unauthorized request' })
    }
    const deleted_doctor = await db.doctor.delete({
      where: { userId: sender.id },
    })
    if (deleted_doctor) {
      return NextResponse.json({ deleted_doctor })
    } else {
      return NextResponse.json({
        message: 'doctor profile on this user does not exist',
      })
    }
  } catch (err: any) {
    return NextResponse.json({ message: err.message })
  }
}
