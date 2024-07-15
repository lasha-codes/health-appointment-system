import DoctorForm from './_components/doctor_form'
import Image from 'next/image'
import doctor_bg from '@/assets/doctor-bg.png'
import doctor from '@/assets/doctor.png'

const BecomeDoctorPage = () => {
  return (
    <main className='mt-10'>
      <div className='w-full flex items-start justify-between gap-20 max-lg:flex-col'>
        <div className='w-full'>
          <div className='flex flex-col items-start gap-5'>
            <h2 className='text-2xl font-medium text-black'>
              How to become doctor at Healthcare.
            </h2>
            <p className='text-[15px] max-w-[500px] text-gray-500'>
              Hello dear user, if u are trying to become doctor at Healthcare
              company, we would first like you to fill out the form below this,
              after that we will receive your information hiring manager will
              decide u will either be acepted or not, if something goes wrong we
              can always contact you via your email, or phone number.
            </p>
          </div>

          <DoctorForm />
        </div>
        <div className='flex flex-col items-start w-full gap-4'>
          <h3 className='text-2xl font-medium'>More About Us.</h3>
          <p className='text-[15px] text-gray-500'>
            At HealthCore Innovations Ltd., we are at the forefront of
            revolutionizing healthcare through cutting-edge technologies and
            compassionate care. Established in 2000, our mission has always been
            to enhance the well-being of individuals and communities by
            providing innovative healthcare solutions. Our Commitment to
            Excellence Patient-Centric Approach: Our patients are at the heart
            of everything we do. We prioritize their comfort, dignity, and
            health outcomes above all else. Innovative Technologies: We leverage
            state-of-the-art technologies such as AI-driven diagnostics,
            telemedicine platforms, and personalized treatment plans to deliver
            superior care. Clinical Expertise: Our team comprises world-class
            physicians, nurses, and healthcare professionals who bring decades
            of experience and expertise to the table. Community Engagement: We
            actively engage with local communities to promote health education,
            disease prevention, and wellness initiatives. HealthCore's
            Comprehensive Services Primary Care: Routine check-ups,
            vaccinations, and preventive screenings tailored to individual
            needs. Specialized Treatments: Advanced treatments in areas such as
            oncology, cardiology, neurology, and orthopedics, ensuring
            comprehensive care for complex conditions. Mental Health Support:
            Counseling services, therapy sessions, and support groups to address
            psychological well-being. Elderly Care: Geriatric care programs
            focusing on enhancing quality of life and managing age-related
            conditions with dignity and respect. Our Core Values Integrity: We
            uphold the highest ethical standards in all interactions, ensuring
            transparency and trustworthiness. Compassion: We treat every patient
            with empathy, understanding their unique circumstances and striving
            to improve their quality of life. Innovation: We embrace innovation
            to continually improve our services, anticipating and adapting to
            the evolving needs of our patients and the healthcare industry.
            Rules and Guidelines Confidentiality: Strict adherence to patient
            confidentiality laws (HIPAA) is mandatory. Patient information must
            never be shared without explicit consent. Professional Conduct: All
            employees must maintain professional conduct at all times, treating
            colleagues, patients, and visitors with respect and courtesy.
            Quality Assurance: Regular audits and assessments ensure that our
            services meet and exceed industry standards, promoting continuous
            improvement. Safety Protocols: Adherence to safety protocols and
            infection control measures is non-negotiable to ensure a safe
            environment for patients and staff alike. Compliance: Compliance
            with regulatory requirements and best practices is mandatory to
            uphold our commitment to legal and ethical standards. Join Us in
            Shaping the Future of Healthcare At HealthCore Innovations Ltd., we
            are driven by a shared vision of transforming healthcare for the
            better. Join our team and contribute your skills to making a
            meaningful difference in the lives of others. Together, we can
            innovate, inspire, and lead the way to a healthier future.
          </p>
        </div>
      </div>
    </main>
  )
}

export default BecomeDoctorPage
