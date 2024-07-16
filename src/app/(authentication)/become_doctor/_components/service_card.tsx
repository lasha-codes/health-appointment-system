'use client'

import { service_type } from '@/data/services/services'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { toggle_service } from '@/app/_library/slices/doctor_slice'

const ServiceCard = ({ id, title, image, summary }: service_type) => {
  const dispatch = useDispatch()
  const { selected_services }: { selected_services: service_type[] } =
    useSelector((state: any) => state.doctor)
  const is_selected = selected_services.find((service) => {
    return service.id === id
  })
  return (
    <div
      onClick={() =>
        dispatch(toggle_service({ service: { id, title, image, summary } }))
      }
      className={`bg-white cursor-pointer transition-all duration-300 ease-linear ${
        is_selected ? 'shadow-green-200 shadow-lg' : 'shadow-red-200 shadow-md'
      } flex items-start overflow-hidden gap-10 w-[530px] h-[190px] rounded-xl`}
    >
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
