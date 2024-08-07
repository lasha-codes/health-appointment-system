'use client'

import Link from 'next/link'
import navigation, { buttons } from '@/data/nav-links'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useAuth, UserButton } from '@clerk/nextjs'
import { useSelector } from 'react-redux'
import { Doctor } from '@prisma/client'

const Header = () => {
  const pathname = usePathname()
  const { sessionId } = useAuth()
  const { doctor_profile }: { doctor_profile: Doctor | null } = useSelector(
    (state: any) => state.doctor
  )
  return (
    <header className='w-full flex justify-between items-center'>
      <Link
        href='/'
        className='relative w-[160px] h-[60px] max-lg:w-[150px] max-md:w-[130px] max-md:h-[45px]'
      >
        <Image src={logo} alt='website-logo' fill className='object-contain' />
      </Link>
      <div className='flex gap-20 max-lg:gap-14 max-md:gap-10 max-sm:gap-7 items-end'>
        <nav className='flex items-center gap-4'>
          {navigation.map((link, idx: number) => (
            <Link
              href={link.path}
              key={idx}
              className={`transition-all duration-300 relative ease-linear group hover:text-main_green font-medium pb-2 ${
                pathname === link.path && 'text-main_green'
              }`}
            >
              {link.name}
              <div
                className={`absolute w-[85%] h-[2px] rounded bg-main_green group-hover:opacity-90 opacity-0 transition-all duration-500 ease-out left-[50%] translate-x-[-50%] ${
                  pathname === link.path && 'opacity-90'
                }`}
              />
            </Link>
          ))}
        </nav>
        {!sessionId ? (
          <div className='flex items-center gap-5'>
            {buttons.map((button, idx: number) => (
              <Link
                href={button.path}
                key={idx}
                className={`${
                  button.name.toLowerCase() === 'sign up'
                    ? 'text-main_green font-medium cursor-pointer'
                    : 'px-9 py-1.5 rounded-lg bg-main_green font-medium text-white cursor-pointer drop-shadow-xl hover:drop-shadow-md transition-all duration-300 active:drop-shadow-none'
                }`}
              >
                {button.name}
              </Link>
            ))}
          </div>
        ) : (
          <div className='flex items-center gap-5'>
            {doctor_profile ? (
              <Link
                href='doctor_profile'
                className='font-medium text-main_green hover:underline'
              >
                Doctor profile
              </Link>
            ) : (
              <Link
                href='/become_doctor'
                className='font-medium text-main_green hover:underline'
              >
                How to become doctor?
              </Link>
            )}
            <UserButton />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
