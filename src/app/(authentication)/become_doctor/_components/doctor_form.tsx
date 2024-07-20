'use client'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import { IoImagesOutline } from 'react-icons/io5'
import default_avatar from '@/assets/default-avatar.svg'
import Image from 'next/image'
import image_loader from '@/assets/loader.webp'
import { useDispatch, useSelector } from 'react-redux'
import { service_type } from '@/data/services/services'
import {
  reset_state,
  socials_type,
  times,
} from '@/app/_library/slices/doctor_slice'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const DoctorForm = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [phoneValue, setPhoneValue] = useState<string>('+995')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [summary, setSummary] = useState<string>('')
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

  const {
    selected_services,
    available_times,
    social_links,
  }: {
    selected_services: service_type[]
    available_times: times[]
    social_links: socials_type[]
  } = useSelector((state: any) => state.doctor)
  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      let times_pass: boolean = false
      if (!name || !email || !phoneValue || !summary) {
        return toast.error('Please fill out all of the fields')
      }
      if (!doctorImage) {
        return toast.error('Image for a doctor profile is required')
      }
      for (const idx in available_times) {
        if (!available_times[idx].time) {
          times_pass = false
          break
        } else {
          times_pass = true
        }
      }
      if (available_times.length > 6) {
        return toast.error('Maximum amount of available times is 6')
      }
      if (!times_pass) {
        return toast.error('available times field must be filled out')
      }
      if (selected_services.length === 0) {
        return toast.error('minimum 1 service must be selected')
      }
      const response = await axios.post('/api/doctors', {
        name,
        email,
        phone_number: phoneValue,
        photo: doctorImage,
        services: selected_services,
        working_times: available_times,
        social_links,
        summary,
      })
      console.log(response)
      dispatch(reset_state())
      setDoctorImage('')
      setEmail('')
      setName('')
      setPhoneValue('+995')
      setSummary('')
      toast.success('Doctor profile has been set up')
      router.replace('/')
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  return (
    <form onSubmit={submitForm} className='w-fit mt-20'>
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
            type='email'
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

        <div className='flex flex-col items-start gap-1.5 w-full'>
          <label htmlFor='summary' className='cursor-pointer text-[15px]'>
            Tell us about yourself
          </label>
          <textarea
            value={summary}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setSummary(e.target.value)
            }
            id='summary'
            placeholder='ex. john.doe@gmail.com'
            className='border rounded w-[500px] resize-none max-md:w-full border-main_green outline-none px-4 py-1 text-gray-600 font-medium placeholder:text-sm placeholder:font-light'
          />
        </div>
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
      <button
        type='submit'
        className='w-1/2 max-md:w-full bg-gradient-to-r from-[#47BD96] to-[#4888B1] transition-all duration-300 py-3 rounded-xl text-white mt-10 drop-shadow-lg shadow-[#4888B1] hover:drop-shadow-none opacity-70 hover:opacity-100'
      >
        Submit
      </button>
    </form>
  )
}

export default DoctorForm
