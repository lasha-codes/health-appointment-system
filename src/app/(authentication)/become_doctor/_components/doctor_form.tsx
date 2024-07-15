'use client'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import { IoImagesOutline } from 'react-icons/io5'
import default_avatar from '@/assets/default-avatar.svg'
import Image from 'next/image'
import image_loader from '@/assets/loader.webp'

const DoctorForm = () => {
  const [phoneValue, setPhoneValue] = useState<string>('+995')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [doctorImage, setDoctorImage] = useState<string>('')
  const [imageLoading, setImageLoading] = useState<boolean>(false)

  const uploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]
    const base64: any = await convertBase64(file)
    setImageLoading(false)
    if (base64) {
      setDoctorImage(base64)
    }
  }

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)

      setImageLoading(true)

      fileReader.onload = () => {
        resolve(fileReader.result)
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
      <div className='flex flex-col items-start gap-2 mt-5'>
        <div
          className={`w-[400px] h-[300px] rounded-xl border bg-white relative overflow-hidden ${
            doctorImage && 'bg-transparent border-transparent'
          }`}
        >
          {!imageLoading && !doctorImage && (
            <Image
              src={default_avatar}
              alt=''
              fill
              className='object-contain'
            />
          )}
          {imageLoading && (
            <Image src={image_loader} alt='' fill className='object-cover' />
          )}
          {!imageLoading && doctorImage && (
            <Image src={doctorImage} alt='' fill className='object-contain' />
          )}
        </div>
        <label
          htmlFor='image'
          className='cursor-pointer bg-main_green hover:bg-main_green/80 transition-all duration-200 flex items-center w-fit px-5 py-2 text-white gap-2 rounded-xl'
        >
          <IoImagesOutline />
          Choose your photo
        </label>
        <input
          type='file'
          id='image'
          onChange={uploadFile}
          className='absolute opacity-0 pointer-events-none'
        />
      </div>
    </form>
  )
}

export default DoctorForm
