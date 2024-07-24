'use client'

import { Doctor } from '@prisma/client'
import Image from 'next/image'
import { BsDot } from 'react-icons/bs'
import { useState } from 'react'

const TopProfileSection = ({ profile }: { profile: Doctor | null }) => {
  const [showSummary, setShowSummary] = useState<boolean>(false)

  const truncateTitle = (title: string) => {
    return !showSummary ? `${title.slice(0, 200)}..` : title
  }

  if (!profile) {
    return
  }

  return (
    <div className='flex flex-col items-start w-full'>
      <div className='w-full h-[300px] doctor_background rounded-2xl relative'>
        <div className='absolute -bottom-10 left-10  rounded-full overflow-hidden w-[130px] h-[130px]'>
          <Image
            src={profile?.image_url as string}
            fill
            className='object-cover'
            alt='doctor profile image'
          />
        </div>
      </div>
      <div className='w-full flex items-start gap-5 mt-14'>
        <div className='px-10 w-full border-gray-300'>
          <h3 className='text-[22px] font-medium border-b capitalize pb-3 border-gray-300'>
            {profile?.name}
          </h3>
          <div className='mt-3 flex flex-col items-start gap-2.5 border-b pb-3 border-gray-300'>
            <h4 className='font-medium text-[17px]'>Doctor Profile</h4>
            <p className='text-zinc-500 text-sm max-w-[500px]'>
              {profile.summary.length > 200
                ? truncateTitle(profile?.summary as string)
                : profile?.summary}
            </p>
            {profile.summary.length > 200 && !showSummary && (
              <span
                onClick={() => setShowSummary(true)}
                className='font-medium text-[#429b6a] hover:text-main_green transition-all duration-200 ease-linear cursor-pointer'
              >
                Show more
              </span>
            )}
            {profile.summary.length > 200 && showSummary && (
              <span
                onClick={() => setShowSummary(false)}
                className='font-medium text-main_green hover:text-[#429b6a] transition-all duration-200 ease-linear cursor-pointer'
              >
                Hide
              </span>
            )}
          </div>
        </div>
        <div className='flex flex-col w-[400px] items-start border rounded-xl p-4 gap-4'>
          <h4 className='font-medium'>Medical Actions</h4>
          <div className='flex flex-col items-start gap-1.5'>
            {profile?.services.map((service: any, idx: number) => {
              return (
                <div key={idx} className='flex items-center gap-1'>
                  <BsDot />
                  <span className='text-sm text-zinc-500'>{service.title}</span>
                </div>
              )
            })}
          </div>
          <button className='bg-[#429b6a] text-white transition-all duration-300 ease-linear hover:bg-main_green w-full py-2 rounded-lg'>
            Make Appointments
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopProfileSection
