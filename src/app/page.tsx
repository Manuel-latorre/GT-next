import AboutUs from '@/components/AboutUs/AboutUs'
import Footer from '@/components/Footer/Footer'
import Servicios from '@/components/Servicios/Servicios'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <AboutUs/>
      <Servicios/>
      <Footer/>
    </div>
  )
}
