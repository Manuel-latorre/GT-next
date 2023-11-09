import AboutUs from '@/components/AboutUs/AboutUs'
import ContactoFaqs from '@/components/Faqs/ContactoFaqs'
import Faqs from '@/components/Faqs/Faqs'
import Footer from '@/components/Footer/Footer'
import Servicios from '@/components/Servicios/Servicios'
import Image from 'next/image'
import Contacto from "@/components/Contacto/Contacto"
export default function Home() {
  return (
    <div>
      <AboutUs/>
      <Servicios/>
      <ContactoFaqs/>
      <Faqs/>
      <Contacto/>
      <Footer/>
    </div>
  )
}
