import React from 'react'
import Faqs from '../Lotties/Faqs'
import './ContactoFaqs.css'

const ContactoFaqs = () => {
  return (
    <div style={{marginTop: 100}} id='faqs'>
        <p style={{textAlign:'center', fontSize:30}}>PREGUNTAS FRECUENTES</p>
        <div className='container-faqs-solucion'>
            <div className='container-texto-faqs'>
                <p className='titulo-faqs'>¿No encontraste la respuesta que buscabas?</p>
                <p style={{fontSize:20}}>Podes contactarnos completando el formulario desde la sección de <a className='btnContactoFaqs' href="">CONTACTO</a> o simplemente tocar en el botón de chat de nuestra página para hablar con un representante en tiempo real.</p>
                <div style={{marginTop:40}}>
                    <a className='btnAsesor' href="">Hablar con un asesor</a>
                </div>
            </div>
            <div className='container-lottie-faqs'>
                <Faqs/>
            </div>
        </div>
    </div>
  )
}

export default ContactoFaqs