import { service_type } from '@/data/services/services'
import Image from 'next/image'

const ServiceCard = ({ id, title, image, summary }: service_type) => {
  return (
    <div className='bg-white cursor-pointer shadow-sm flex items-start overflow-hidden gap-10 w-[530px] h-[190px] rounded-xl'>
      <div className='min-w-[50%] max-w-[50%] relative h-full'>
        <Image
          src={image}
          alt={title + '' + 'Image'}
          fill
          className='object-cover'
        />
      </div>
      <div className='flex flex-col items-start gap-2 py-2'>
        <h3 className='capitalize text-[17px] font-medium text-main_green'>
          {title}
        </h3>
        <p className='text-[12px] text-gray-500'>{summary}</p>
      </div>
    </div>
  )
}

export default ServiceCard
