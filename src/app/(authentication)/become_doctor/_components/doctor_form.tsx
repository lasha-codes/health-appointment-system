'use client'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'

const DoctorForm = () => {
  const [phoneValue, setPhoneValue] = useState<string>('+995')
  console.log(phoneValue)
  return (
    <form className='w-full mt-20'>
      <div className='flex items-start gap-3 flex-col w-full'>
        <div className='flex flex-col items-start gap-1.5 w-full'>
          <label htmlFor='username' className='cursor-pointer text-[15px]'>
            Enter Your Name
          </label>
          <input
            type='text'
            id='username'
            placeholder='ex. John Doe'
            className='border rounded w-[500px] max-md:w-full border-main_green outline-none px-4 py-1 text-gray-600 capitalize font-medium placeholder:text-sm placeholder:font-light'
          />
        </div>
        <PhoneInput
          className='outline-none rounded py-1 px-4 w-[350px] -ml-3'
          value={phoneValue}
          onChange={setPhoneValue as any}
          defaultCountry='GE'
        />
      </div>
    </form>
  )
}

export default DoctorForm
