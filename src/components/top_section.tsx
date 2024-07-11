import { IoPlay } from 'react-icons/io5'
import Link from 'next/link'

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
          <div className='flex items-center gap-5'>
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
      <div></div>
    </section>
  )
}

export default TopSection
