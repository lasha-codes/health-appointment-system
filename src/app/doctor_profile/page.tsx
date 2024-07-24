'use client'
import { Doctor } from '@prisma/client'
import { useSelector } from 'react-redux'
import TopProfileSection from './_components/top_section'
import ConfirmDeletionBox from './_components/confirm_deletion'

const DoctorProfilePage = () => {
  const { doctor_profile }: { doctor_profile: Doctor | null } = useSelector(
    (state: any) => state.doctor
  )
  return (
    <div className='relative'>
      <ConfirmDeletionBox />
      <TopProfileSection profile={doctor_profile} />
      <button className='bg-red-800 transition-all duration-300 ease-linear hover:bg-red-900 text-white px-5 py-2 rounded-lg'>
        Delete account?
      </button>
    </div>
  )
}

export default DoctorProfilePage
