import { SignIn } from '@clerk/nextjs'

const LoginPage = () => {
  return (
    <div className='w-full h-[80vh] flex justify-center items-center'>
      <SignIn />
    </div>
  )
}

export default LoginPage
