'use client'
import { Doctor } from '@prisma/client'
import { useSelector } from 'react-redux'
import TopProfileSection from './_components/top_section'

const DoctorProfilePage = () => {
  const { doctor_profile }: { doctor_profile: Doctor | null } = useSelector(
    (state: any) => state.doctor
  )
  return (
    <div className=''>
      <TopProfileSection profile={doctor_profile} />
    </div>
  )
}

export default DoctorProfilePage
