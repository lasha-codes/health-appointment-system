type navLinks = {
  name: string
  path: string
}

const navigation: navLinks[] = [
  { name: 'Home', path: '/' },
  { name: 'Service', path: '/service' },
  { name: 'Contact Us', path: '/contact-us' },
  { name: 'Help', path: '/help' },
  { name: 'Blogs', path: '/blogs' },
]

export const buttons: navLinks[] = [
  { name: 'Sign Up', path: '/register' },
  { name: 'Log In', path: '/login' },
]

export default navigation
