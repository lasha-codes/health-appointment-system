import { FaWhatsapp } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'
import Link from 'next/link'

const ContactInfo = ({
  phone_number,
  email,
}: {
  phone_number: string
  email: string
}) => {
  return (
    <div className='flex flex-col items-start gap-3 p-5 rounded-xl bg-white shadow-md'>
      <Link
        href={`https://wa.me/${phone_number}`}
        className='flex items-center gap-3 text-[15px]'
      >
        <FaWhatsapp className='text-[#3BD876] text-lg' />
        {phone_number}
      </Link>
      <Link
        href={`mailto:${email}`}
        className='flex items-center gap-3 text-[#6370e7]'
      >
        <CgMail />
        {email}
      </Link>
    </div>
  )
}

export default ContactInfo
