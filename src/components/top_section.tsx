import { IoPlay } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'
import doctor from '@/assets/doctor.png'
import doctor_bg from '@/assets/doctor-bg.png'

const TopSection = () => {
  return (
    <section className='w-full flex justify-between mt-20'>
      <div className='flex flex-col gap-5 max-w-[500px]'>
        <p className='text-3xl text-black font-medium'>
          Providing Quality <span className='text-[#007E85]'>Healthcare</span>{' '}
          For A <span className='text-[#6EAB36]'>Brighter</span> And{' '}
          <span className='text-[#6EAB36]'>Healthy</span> Future
        </p>
        <div className='flex flex-col gap-8'>
          <p className='text-sm text-[#333333]'>
            At our hospital, we are dedicated to providing exceptional medical
            care to our patients and their families. Our experienced team of
            medical professionals, cutting-edge technology, and compassionate
            approach make us a leader in the healthcare industry
          </p>
          <div className='flex items-center gap-8'>
            <button className='text-white bg-main_green px-8 py-1.5 rounded hover:bg-main_green/80 transition-all duration-300 ease-linear'>
              Appointments
            </button>
            <div className='flex items-center gap-3'>
              <Link
                target='_blank'
                href='https://youtube.com'
                className='bg-main_green text-white rounded-full p-2.5'
              >
                <IoPlay />
              </Link>
              <span>Watch Video</span>
            </div>
          </div>
        </div>
      </div>
      <div className='relative'>
        <Image
          src={doctor_bg}
          priority
          className='w-[250px] md:w-[300px] 2xl:-mt-16 lg:w-[350px] xl:w-[420px] 2xl:w-[470px]'
          alt=''
        />
        <Image
          src={doctor}
          className='absolute top-0 2xl:-top-16 w-[223px] md:w-[268px] right-5 lg:w-[314px] xl:w-[378px] 2xl:w-[425px]'
          alt=''
          priority
        />
        <div className='flex bg-white rounded-xl items-center drop-shadow-sm w-fit px-3 py-2 gap-2 font-medium text-sm max-lg:text-[13px] absolute -right-6 top-14'>
          <span className='text-main_green text-lg max-lg:text-[15px]'>
            24/7
          </span>
          Services
        </div>
      </div>
    </section>
  )
}

export default TopSection
