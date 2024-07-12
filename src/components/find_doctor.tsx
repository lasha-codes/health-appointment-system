'use client'
import { useState } from 'react'

const FindDoctorSection = () => {
  const [name, setName] = useState<string>('')
  const [specialty, setSpecialty] = useState<string>('')
  const [available, setAvailable] = useState<boolean>(true)

  return (
    <div className='w-full bg-white shadow-md mt-10 flex px-7 py-6 items-end justify-between rounded-xl'>
      <div className='flex flex-col items-start gap-5'>
        <h2 className='text-xl font-medium'>Find A Doctor</h2>
        <div className='flex items-center gap-3'>
          <input
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            type='text'
            placeholder='Name'
            className='py-2 rounded border outline-none border-main_green px-3.5'
          />
          <input
            value={specialty}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSpecialty(e.target.value)
            }
            type='text'
            placeholder='Specialty'
            className='py-2 rounded border outline-none border-main_green px-3.5'
          />
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <span className='font-medium text-[15px]'>Available</span>
        <div
          onClick={() => setAvailable((prev) => !prev)}
          className={`w-[45px] h-[21px] px-[2px] py-[2px] rounded-full border border-main_green cursor-pointer ${
            !available && 'border-red-500/70'
          }`}
        >
          <div
            className={`h-full w-[16px] rounded-full transition-all duration-300 ease-in-out cursor-pointer ${
              available ? 'bg-main_green translate-x-[22px]' : 'bg-red-500/70'
            }`}
          />
        </div>
      </div>
      <button className='px-10 py-2 rounded bg-main_green text-white hover:bg-main_green/80 transition-all duration-300 ease-in-out'>
        Search
      </button>
    </div>
  )
}

export default FindDoctorSection
