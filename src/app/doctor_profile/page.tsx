'use client'
import { Doctor } from '@prisma/client'
import { useSelector, useDispatch } from 'react-redux'
import TopProfileSection from './_components/top_section'
import ConfirmDeletionBox from './_components/confirm_deletion'
import { toggle_delete_box } from '../_library/slices/doctor_slice'

const DoctorProfilePage = () => {
  const dispatch = useDispatch()
  const {
    doctor_profile,
    delete_toggle,
  }: { doctor_profile: Doctor | null; delete_toggle: boolean } = useSelector(
    (state: any) => state.doctor
  )
  return (
    <div className='relative'>
      <div
        onClick={() => dispatch(toggle_delete_box({ bool: false }))}
        className={`fixed w-screen h-screen transition-all duration-300 bg-gray-300 top-0 left-0 z-[1] ${
          delete_toggle
            ? 'opacity-30 pointer-events-auto'
            : 'pointer-events-none opacity-0'
        }`}
      />
      <ConfirmDeletionBox />
      <TopProfileSection profile={doctor_profile} />
      <button
        onClick={() => dispatch(toggle_delete_box({ bool: true }))}
        className='bg-red-800 transition-all duration-300 ease-linear hover:bg-red-900 text-white px-5 py-2 rounded-lg'
      >
        Delete account ?
      </button>
    </div>
  )
}

export default DoctorProfilePage
