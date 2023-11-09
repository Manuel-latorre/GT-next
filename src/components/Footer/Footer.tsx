import React from 'react'
import logo from '../../assets/logo.png'
import phone from './cell-phone.png'
import email from './email.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import twitter from './twitter.png'
import pin from './pin.png'
import './Footer.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='containerFooter'>
        <div className="logoFooter">
        <Image src={logo} alt='fotoLogo' />
        <h2>Generacion <br /><span style={{color:"#00fff5"}}>Tech</span></h2>
        </div>
      <div className="sectionContainerF">
        <div className="linksContainerFooter">
        <h3>Links</h3>
        <div className="linksFooter">
            <a style={{padding:4}} href='/'>Inicio</a>
            <a style={{padding:4}} href='nosotros'>Nostros</a>
            <a style={{padding:4}} href='/#servicios'>Servicios</a>
            <a style={{padding:4}} href='/#faqs'>FAQs</a>
            <a style={{padding:4}} href='/#nuestroEquipo'>Nuestro equipo</a>
            <a style={{padding:4}} href='/#contacto'>Contacto</a>
        </div>
        </div>
        <div className="contacto">
          <h3>Contacto</h3>
          <div className="contact">
              <Image src={email} alt='fotoLogo' />

              <p style={{marginLeft:10}}>GeneracionTech@gmail.com</p>
          </div>

          <div className="contact">
              <Image src={phone} alt='fotoLogo' />
              <p style={{marginLeft:10}}>+54 ----------</p>
          </div>

          <div className="contact">
              <Image src={pin} alt='fotoLogo' />
              <p style={{marginLeft:10}}>Cordoba, Cordoba, Cordoba</p>
          </div>
        </div>
        <div className="redesContainerFooter">
        <h3 >Redes</h3>

            <div className="linkedinContainer">
              <Image src={linkedin} alt='fotoLogo' />

              <p style={{marginLeft:10}}>Linkedin</p>
            </div>

            <div className="linkedinContainer">
              <Image src={linkedin} alt='fotoLogo'  style={{width:'25px'}}/>
              <p style={{marginLeft:10}}>Instagram</p>
            </div>

            <div className="linkedinContainer">
              <Image src={twitter} alt='fotoLogo'/>
              <p style={{marginLeft:10}}>Twitter</p>
            </div>
        </div>
      </div>
      <div className="terminosFooter">
        <p style={{fontSize:10}}>Terminos y condiciones</p>
        <hr  style={{ marginLeft: 20  , marginRight: 20, fontSize:2}}/>
        <p style={{fontSize:10}}>Privacidad</p>
        <hr  style={{ marginLeft: 20  , marginRight: 20}}/>
        <p style={{fontSize:10}}>Politica y Privacidad</p>
      </div>
    </div>
  )
}

export default Footer