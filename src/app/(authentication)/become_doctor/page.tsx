import DoctorForm from './_components/doctor_form'
import ServiceCard from './_components/service_card'
import { service_type, services } from '@/data/services/services'

const BecomeDoctorPage = () => {
  return (
    <main className='mt-10'>
      <div className='flex items-start justify-between gap-5'>
        <div className='w-full flex items-start justify-between gap-20 max-lg:flex-col'>
          <div className='w-full'>
            <div className='flex flex-col items-start gap-5'>
              <h2 className='text-2xl font-medium text-black'>
                How to become doctor at Healthcare.
              </h2>
              <p className='text-[15px] max-w-[500px] text-gray-500'>
                Hello dear user, if u are trying to become doctor at Healthcare
                company, we would first like you to fill out the form below
                this, after that we will receive your information hiring manager
                will decide u will either be acepted or not, if something goes
                wrong we can always contact you via your email, or phone number.
              </p>
            </div>
            <DoctorForm />
          </div>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          {services.map((service: service_type) => {
            return <ServiceCard {...service} key={service.id} />
          })}
        </div>
      </div>
    </main>
  )
}

export default BecomeDoctorPage
