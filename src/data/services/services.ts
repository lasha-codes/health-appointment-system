import { StaticImageData } from 'next/image'
import primary_care from '../services/assets/primary_care.png'
import preventive_care from '../services/assets/preventive_care.jpg'
import emergency_care from '../services/assets/emergency_care.png'
import palliative_care from '../services/assets/palliative_care.png'
import physical_therapy from '../services/assets/physical_therapy.jpg'

export type service_type = {
  id: number
  title: string
  image: StaticImageData
  summary: string
}

export const services: service_type[] = [
  {
    id: 1,
    title: 'Primary care',
    image: primary_care,
    summary:
      'Primary health care (PHC) is a critical point of contact to address the health care needs of the population. It forms an essential part of a national health care system. Health systems with stronger focus on PHC have improved health, financial and equity outcomes.',
  },
  {
    id: 2,
    title: 'Preventive care',
    image: preventive_care,
    summary:
      'In contrast, preventive medical care focuses on preventing health problems from occurring. Preventive care also focuses on diagnosing problems before symptoms or complications develop, when the chances of recovery are greatest.',
  },
  {
    id: 3,
    title: 'Emergency care',
    image: emergency_care,
    summary:
      'This is a summary of basic information about your health which might be important if you need urgent medical care when your GP surgery is closed, or when you go to an accident and emergency department.',
  },
  {
    id: 4,
    title: 'Palliative care',
    image: palliative_care,
    summary:
      'Palliative care is specialized medical care that focuses on providing relief from pain and other symptoms of a serious illness. It also can help you cope with side effects from medical treatments. The availability of palliative care does not depend on whether your condition can be cured.',
  },
  {
    id: 5,
    title: 'Physical Therapy',
    image: physical_therapy,
    summary:
      'Physical therapy (PT) is care that aims to ease pain and help you function, move, and live better. Your doctor might suggest this type of treatment if you`ve had an injury or illness that makes it hard to do daily tasks.',
  },
]
