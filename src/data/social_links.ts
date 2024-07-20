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
  color: string
}

export const social_links: socials[] = [
  { platform: 'INSTAGRAM', icon: FaInstagram, color: '#E1306C' },
  { platform: 'TIKTOK', icon: FaTiktok, color: '#6A76AC' },
  { platform: 'FACEBOOK', icon: FaFacebook, color: '#4267B2' },
  { platform: 'LINKEDIN', icon: FaLinkedin, color: '#0a66c2' },
  { platform: 'GITHUB', icon: FaGithub, color: '#686868' },
]
