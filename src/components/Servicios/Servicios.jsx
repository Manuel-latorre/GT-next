"use client"

import React, {useState} from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './Servicios.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Loader from '../Loader/Loader'
import { useNavigate } from 'react-router-dom';
import avatar from '../../assets/avatar5.png'




const Servicios = () => {
    const [showLoader, setShowLoader] = useState(false);
    const navigate= useNavigate();
    const loader = (event) => {
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false); 
            navigate(`/${event.target.name}`)
            window.scrollTo(0, 0)
        }, 1000);
    };
    return (
        <div id='servicios' className='services'>

        <div className='container-servicios-mobile'>
        <>
        <p style={{fontSize: 30, fontWeight: '400', textAlign:'center', marginBottom: 80, marginTop: 50}}>SERVICIOS</p>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        // pagination={true}
        // navigation={true}
        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        >
        <SwiperSlide>
        <div className="cardServicio" id='mobile'>
                   <p className='tituloCard' id='titleMobile'>DESARROLLO DE SOFTWARE</p>
                   <hr />
                   <li className='li'>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:30}}/>
                           <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Desarrollo y diseños de sitios web a Medida / Landing Pages</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:30}}/>
                           <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Diseño de Experiencia e Interfaz de Usuario (UX/UI)</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:30}}/>
                           <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Mantenimiento y Soporte de Software</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:30}}/>
                           <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Alojamiento Web hosting</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:30}}/>
                           <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Website Testing</p>
                        </div>
                   </li>
           
                   <button name='desarrollo' className='btnConoceMas' href='' id='btnConoceMasMobile' onClick={loader}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Conocé más
                    </button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cardServicio" id='mobile'>
                   <p className='tituloCard' id='titleMobile'>MARKETING <br/> DIGITAL</p>
                   <hr />
                   <li className='li'>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:30}}/>
                           <p style={{marginLeft: 5, textAlignLast:'start', textAlign:'start', fontSize:14}}>Gestión de Redes Sociales y generación de contenido</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:30}}/>
                           <p style={{marginLeft: 5 , textAlignLast:'start', textAlign:'start', fontSize:14}}>Campañas Social Ads / Email Marketing</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:30}}/>
                           <p style={{marginLeft: 5, textAlign:'start', fontSize:14}}> Inbound Marketing</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:30}}/>
                           <p style={{marginLeft: 5, textAlign:'start', fontSize:14}}> Optimización y Publicidad en motores de busqueda (SEM /SEO)</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:30}}/>
                           <p style={{marginLeft: 5, textAlign:'start', fontSize:14}}>Marketing de Contenidos</p>
                       </div>
                   </li>
                   <button name='marketing' className='btnConoceMas' href='' id='btnConoceMasMobile' onClick={loader}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Conocé más
                    </button>
               </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cardServicio" id='mobile'>
                   <p className='tituloCard' id='titleMobile'>COMERCIO <br/> ELECTRONICO</p>
                   <hr />
                   <li className='li'>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:30}}/>
                           <p style={{marginLeft: 5}}>Auditoría Web</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:30}} />
                           <p style={{marginLeft: 5}}>Auditoría Social Media</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:30}} />
                           <p style={{marginLeft: 5}}>Métricas y KPI´s</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:30}} />
                           <p style={{marginLeft: 5}}>Análisis de ventas y conversiones</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:30}} />
                           <p style={{marginLeft: 5}}>Análisis de comportamiento de cliente</p>
                       </div>
                   </li>
                   <button  onClick={loader}  className='btnConoceMas' id='btnConoceMasMobile' name='comercio'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Conocé más
                    </button>
               </div>
        </SwiperSlide>
      </Swiper>
    </>
</div>  
        <div className='container-servicios-web'>
          <>
           <p style={{fontSize: 30, fontWeight: '400', textAlign:'center', marginBottom: 80, marginTop: 50}}>SERVICIOS</p>

           <div className='cardsServicios'>
          
               <div className="cardServicio">
                   <p className='tituloCard'>DESARROLLO DE SOFTWARE</p>
                   <hr />
                   <li className='li'>
                   <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:40}}/>
                           <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Desarrollo y diseños de sitios web a Medida / Landing Pages</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:40}}/>
                           <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Diseño de Experiencia e Interfaz de Usuario (UX/UI)</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:40}}/>
                           <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Mantenimiento y Soporte de Software</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:40}}/>
                           <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Alojamiento Web hosting</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:40}}/>
                           <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Website Testing</p>
                        </div>
                   </li>
           
                   <button name='desarrollo' className='btnConoceMas' href='' id='btnConoceMasMobile' onClick={loader}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Conocé más
                    </button>
            </div>
      
               <div className="cardServicio">
                   <p className='tituloCard'>MARKETING <br/> DIGITAL</p>
                   <hr />
                   <li className='li'>
                   <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:40}}/>
                           <p style={{marginLeft: 5, textAlignLast:'start', textAlign:'start', fontSize:14}}>Gestión de Redes Sociales y generación de contenido</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:40}}/>
                           <p style={{marginLeft: 5 , textAlignLast:'start', textAlign:'start', fontSize:14}}>Campañas Social Ads / Email Marketing</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:40}}/>
                           <p style={{marginLeft: 5, textAlign:'start', fontSize:14}}> Inbound Marketing</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:40}}/>
                           <p style={{marginLeft: 5, textAlign:'start', fontSize:14}}> Optimización y Publicidad en motores de busqueda (SEM /SEO)</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:40}}/>
                           <p style={{marginLeft: 5, textAlign:'start', fontSize:14}}>Marketing de Contenidos</p>
                       </div>
                   </li>
                   <button name='marketing' className='btnConoceMas' href='' id='btnConoceMasMobile' onClick={loader}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Conocé más
                    </button>
               </div>

               <div className="cardServicio">
                   <p className='tituloCard'>COMERCIO <br/> ELECTRONICO</p>
                   <hr />
                   <li className='li'>
                   <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:40}}/>
                           <p style={{marginLeft: 5}}>Auditoría Web</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:40}} />
                           <p style={{marginLeft: 5}}>Auditoría Social Media</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:40}} />
                           <p style={{marginLeft: 5}}>Métricas y KPI´s</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:40}} />
                           <p style={{marginLeft: 5}}>Análisis de ventas y conversiones</p>
                       </div>
                       <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                           <CheckCircleIcon sx={{fontSize:40}} />
                           <p style={{marginLeft: 5}}>Análisis de comportamiento de cliente</p>
                       </div>
                   </li>
                   <button name='comercio' className='btnConoceMas' href='' id='btnConoceMasMobile' onClick={loader}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Conocé más
                    </button>
                    
               </div>
           </div>
          
          </>
        </div>
        {showLoader && <Loader />}
       </div> 
    //  <div style={{display:'flex', justifyContent:'space-evenly'}}>
    //      <div id='ds'>
    //          <div className="card">
    //                  <p style={{textAlign:'center', marginBottom: 40, fontSize: 25, fontWeight:'bold'}}>DESARROLLO DE SOFTWARE</p>
    //              <div className="card-content">
    //              <p style={{fontSize:18}}>Transforma tu visión en realidad con nuestro servicio de desarrollo de sitios web. Creamos experiencias digitales únicas y funcionales que destacan tu marca y atraen a tu audiencia. ¡Construyamos juntos la presencia en línea que tu negocio merece!</p>
    //              <button className='btnConoceMas'>Conocé mas</button>
    //              </div>
    //          </div>
    //      </div>

    //  <div id='mk'>
    //      <div class="card">
    //              <p style={{textAlign:'center', marginBottom: 40, fontSize: 25, fontWeight:'bold'}}>MARKETING DIGITAL</p>
    //          <div class="card-content">
    //          <p style={{fontSize:18}}>En un mundo cada vez más conectado, el marketing digital no es solo una opción, es una necesidad. Convierte visitantes en clientes y desbloquea el verdadero potencial de tu negocio en el mundo digital!</p>
    //          <button className='btnConoceMas'>Conocé mas</button>
    //          </div>
    //      </div>

    //  </div>

    //  <div id='ce'>
    //      <div class="card">
    //              <p style={{textAlign:'center', marginBottom: 40, fontSize: 25, fontWeight:'bold'}}>COMERCIO ELECTRONICO</p>
    //          <div class="card-content">
    //          <p style={{fontSize:18}}>Brindamos soluciones de comercio electrónico para impulsar tu negocio en línea y aumentar tus ventas. ¡Descubre cómo podemos ayudarte a tener éxito en el mundo digital Auditamos canales digitales. Y te elevamos informes detallados de situación.</p>
    //          <button className='btnConoceMas'>Conocé mas</button>
    //          </div>
    //      </div>

    //  </div>
    //  </div>
  )
}

export default Servicios
