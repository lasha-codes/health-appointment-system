'use client'
import { social_links } from '@/data/social_links'

const SocialLinks = () => {
  return (
    <div className='flex items-center gap-3'>
      {social_links.map((social, idx) => {
        return <social.icon key={idx} />
      })}
    </div>
  )
}

export default SocialLinks
