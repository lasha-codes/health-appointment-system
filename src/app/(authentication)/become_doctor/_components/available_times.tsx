'use client'

import { useDispatch, useSelector } from 'react-redux'
import { FaPlus } from 'react-icons/fa6'
import { times } from '@/app/_library/slices/doctor_slice'

const AvailableTimesSelector = () => {
  const dispatch = useDispatch()
  const { available_times }: { available_times: times[] } = useSelector(
    (state: any) => state.doctor
  )
  return (
    <div className='flex flex-col items-end gap-5 w-fit'>
      <div className='flex flex-col items-start w-fit'>
        {available_times.map((time, idx) => {
          return (
            <div key={idx} className='flex items-center w-fit gap-5'>
              <div className='p-1.5 rounded border border-gray-300 hover:bg-gray-300 transition-all duration-300 text-main_green cursor-pointer active:scale-95'>
                {time.timeline}
              </div>
              <input className='bg-transparent border-b-2 border-black outline-none py-1 rounded' />
            </div>
          )
        })}
      </div>
      <FaPlus className='active:scale-90 cursor-pointer hover:text-black/80 text-lg' />
    </div>
  )
}

export default AvailableTimesSelector
