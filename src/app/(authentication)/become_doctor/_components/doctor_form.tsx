'use client'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'

const DoctorForm = () => {
  const [phoneValue, setPhoneValue] = useState<string>('+995')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [doctorImage, setDoctorImage] = useState<string>('')
  const [imageLoading, setImageLoading] = useState<boolean>(false)

  const uploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]
    const base64: any = await convertBase64(file)
    if (base64) {
      setDoctorImage(base64)
    }
  }

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)

      fileReader.onloadstart = () => {
        setImageLoading(true)
      }

      fileReader.onload = () => {
        resolve(fileReader.result)
        setImageLoading(false)
      }

      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  return (
    <form className='w-full mt-20'>
      <div className='flex items-start gap-3 flex-col w-full'>
        <div className='flex flex-col items-start gap-1.5 w-full'>
          <label htmlFor='username' className='cursor-pointer text-[15px]'>
            Enter your name
          </label>
          <input
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            type='text'
            id='username'
            placeholder='ex. John Doe'
            className='border rounded w-[500px] max-md:w-full border-main_green outline-none px-4 py-1 text-gray-600 capitalize font-medium placeholder:text-sm placeholder:font-light'
          />
        </div>

        <div className='flex flex-col items-start gap-1.5 w-full'>
          <label htmlFor='email' className='cursor-pointer text-[15px]'>
            Provide email address
          </label>
          <input
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            type='text'
            id='email'
            placeholder='ex. john.doe@gmail.com'
            className='border rounded w-[500px] max-md:w-full border-main_green outline-none px-4 py-1 text-gray-600 font-medium placeholder:text-sm placeholder:font-light'
          />
        </div>

        <PhoneInput
          className='outline-none rounded py-1 px-4 w-[350px] -ml-3'
          value={phoneValue}
          onChange={setPhoneValue as any}
          defaultCountry='GE'
        />
      </div>
      <div>
        <input type='file' onChange={uploadFile} />
      </div>
    </form>
  )
}

export default DoctorForm
