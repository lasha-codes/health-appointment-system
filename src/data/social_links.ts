import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaGithub,
} from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

type socials = {
  platform: string
  icon: IconType
}

export const social_links: socials[] = [
  { platform: 'INSTAGRAM', icon: FaInstagram },
  { platform: 'FACEBOOK', icon: FaFacebook },
  { platform: 'LINKEDIN', icon: FaLinkedin },
  { platform: 'TIKTOK', icon: FaTiktok },
  { platform: 'GITHUB', icon: FaGithub },
]
