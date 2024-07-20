'use client'
import { social_links } from '@/data/social_links'
import { useDispatch } from 'react-redux'
import { toggle_social_link } from '@/app/_library/slices/doctor_slice'

const SocialLinks = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col items-start gap-5'>
      <h3 className='text-xl font-medium'>Add your social links.</h3>
      <div className='flex items-center gap-6'>
        {social_links.map((social, idx) => {
          return (
            <div
              onClick={() =>
                dispatch(
                  toggle_social_link({
                    platform: social.platform,
                    color: social.color,
                  })
                )
              }
              key={idx}
              className='active:scale-95 hover:scale-105 transition-all'
            >
              <social.icon
                className='text-2xl cursor-pointer'
                style={{ color: social.color }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SocialLinks
