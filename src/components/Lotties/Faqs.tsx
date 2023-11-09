'use client'
import Lottie from 'lottie-react'
import faqs from '../../assets/faqs.json'


const Faqs = () => {
  return (
    <div>
        <Lottie style={{width:500}} animationData={faqs} loop={true} />
    </div>
  )
}

export default Faqs;