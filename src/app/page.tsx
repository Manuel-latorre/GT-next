import AboutUs from '@/components/AboutUs/AboutUs'
import ContactoFaqs from '@/components/Faqs/ContactoFaqs'
import Faqs from '@/components/Faqs/Faqs'

import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <AboutUs/>
      <ContactoFaqs/>
      <Faqs/>
    </div>
  )
}
