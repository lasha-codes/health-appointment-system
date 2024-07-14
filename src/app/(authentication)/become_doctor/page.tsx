import DoctorForm from './_components/doctor_form'

const BecomeDoctorPage = () => {
  return (
    <main className='mt-10'>
      <div className='flex flex-col items-start gap-5'>
        <h2 className='text-2xl font-medium text-black'>
          How to become doctor at Healthcare.
        </h2>
        <p className='text-[15px] max-w-[500px] text-gray-500'>
          Hello dear user, if u are trying to become doctor at Healthcare
          company, we would first like you to fill out the form below this,
          after that we will receive your information hiring manager will decide
          u will either be acepted or not, if something goes wrong we can always
          contact you via your email, or phone number.
        </p>
      </div>
      <DoctorForm />
    </main>
  )
}

export default BecomeDoctorPage
