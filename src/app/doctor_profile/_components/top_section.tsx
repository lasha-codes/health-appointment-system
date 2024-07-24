import { Doctor } from '@prisma/client'
import Image from 'next/image'

const TopProfileSection = ({ profile }: { profile: Doctor | null }) => {
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
    </div>
  )
}

export default TopProfileSection
