import { SignUp } from '@clerk/nextjs'

const RegisterPage = () => {
  return (
    <div className='w-full h-[80vh] flex justify-center items-center'>
      <SignUp />
    </div>
  )
}

export default RegisterPage
