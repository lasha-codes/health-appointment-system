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
      summary,
    } = body
    if (!currUser) {
      return NextResponse.json({ message: 'Unauthorized request' })
    }
    let userInDb = await db.user.findUnique({
      where: { email: currUser.primaryEmailAddress?.emailAddress },
    })

    if (!userInDb) {
      userInDb = await db.user.create({
        data: {
          email: currUser.primaryEmailAddress?.emailAddress as string,
          username: currUser.fullName as string,
          image_url: currUser.imageUrl,
        },
      })
    }
    const createdDoctor = await db.doctor.create({
      data: {
        userId: userInDb?.id as string,
        email: email,
        name,
        image_url: photo,
        phonenumber: phone_number,
        services,
        summary,
        working_times,
      },
    })

    return NextResponse.json({ new_doctor: createdDoctor })
  } catch (err) {
    console.log(err)
  }
}
