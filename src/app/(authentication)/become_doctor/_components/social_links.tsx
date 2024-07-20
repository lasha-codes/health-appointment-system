'use client'
import { social_links } from '@/data/social_links'
import { useDispatch, useSelector } from 'react-redux'
import {
  socials_type,
  toggle_social_link,
} from '@/app/_library/slices/doctor_slice'
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaGithub,
} from 'react-icons/fa'

const SocialLinks = () => {
  const dispatch = useDispatch()
  const {
    social_links: selected_social_links,
  }: { social_links: socials_type[] } = useSelector(
    (state: any) => state.doctor
  )
  return (
    <div className='flex flex-col items-start gap-5'>
      <h3 className='text-xl font-medium'>Add your social links.</h3>
      <div className='flex items-center gap-6'>
        {social_links.map((social, idx) => {
          const isSelected = selected_social_links.find((link) => {
            return link.platform === social.platform
          })
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
              className={`active:scale-95 hover:scale-105 transition-all p-1.5 border border-transparent rounded-lg ${
                isSelected && '!border-main_green'
              }`}
            >
              <social.icon
                className='text-2xl cursor-pointer'
                style={{ color: social.color }}
              />
            </div>
          )
        })}
      </div>
      <div className='flex flex-col items-start gap-8 mt-5'>
        {selected_social_links.map((link, idx) => {
          const return_social_icon = () => {
            if (link.platform === 'INSTAGRAM') {
              return FaInstagram
            } else if (link.platform === 'TIKTOK') {
              return FaTiktok
            } else if (link.platform === 'FACEBOOK') {
              return FaFacebook
            } else if (link.platform === 'GITHUB') {
              return FaGithub
            } else {
              return FaLinkedin
            }
          }
          const Icon = return_social_icon()
          return (
            <div key={idx} className='flex items-center gap-3.5'>
              <Icon className='text-3xl' style={{ color: link.color }} />
              <input
                type='text'
                className='outline-none bg-transparent border-b-2 placeholder:capitalize border-gray-500'
                placeholder={`${link.platform.toLowerCase()} profile link`}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SocialLinks
