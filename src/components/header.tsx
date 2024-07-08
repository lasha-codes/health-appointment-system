import Link from 'next/link'
import navigation, { buttons } from '@/data/nav-links'
import logo from '@/assets/logo.png'
import Image from 'next/image'

const Header = () => {
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
              className='transition-all duration-300 relative ease-linear group hover:text-main_green font-medium pb-2'
            >
              {link.name}
              <div className='absolute w-[85%] h-[2px] rounded bg-main_green group-hover:opacity-90 opacity-0 transition-all duration-500 ease-out left-[50%] translate-x-[-50%]' />
            </Link>
          ))}
        </nav>
        <div className='flex items-center gap-5'>
          {buttons.map((button, idx: number) => (
            <Link
              href={button.path}
              key={idx}
              className={`${
                button.name.toLowerCase() === 'sign up'
                  ? 'text-main_green font-medium cursor-pointer'
                  : 'px-6 py-1.5 rounded-lg bg-main_green font-medium text-white cursor-pointer drop-shadow-xl hover:drop-shadow-sm transition-all duration-300'
              }`}
            >
              {button.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
