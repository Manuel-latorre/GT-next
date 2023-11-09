"use client"
import React, { useState, useRef} from 'react'
import './Contacto.css'
import { validate } from './validation/validation';
import emailjs from '@emailjs/browser';
import { Alert } from '@mui/material';


const Contacto = () => {
  const formulario = useRef();
  const [openAlert, setOpenAlert]= useState(false);
  
  const [form, setForm]= useState({
    name:'',
    email:'',
    tel:'',
    text:''
  })
  const [errors, setErrors]= useState({});

  const handleChange= (event)=>{
    setForm({...form, [event.target.name]: event.target.value})
    setErrors(validate({...form, [event.target.name]: event.target.value}))
  }
 
  const disabled=()=>{
    if(errors.name || errors.email || errors.tel || errors.text || !form.email || !form.name || !form.text) return true;
    else return false
  }
 
  const handleSubmit=(event)=>{
    event.preventDefault();
    
    
    setOpenAlert(true)
    setTimeout(() => {
      
      setOpenAlert(false)
    }, 5000);
    emailjs.sendForm('service_k8v9j6h', 'template_1o992gh', formulario.current, 'zYxLAVDYmQaJG4_j3')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setForm({
      name:'',
      email:'',
      tel:'',
      text:''
    })
    setErrors({})
  }
  return (
    <div style={{padding:50}} id='contacto'>
        <p style={{fontSize: 30, fontWeight: '400', textAlign:'center', marginBottom: 80, marginTop: 50}}>CONTACTO</p>

        <form className='form' onSubmit={handleSubmit} ref={formulario}>
            <input className='inputForm' type="text" placeholder='Introduzca su nombre ...' name='name' value={form.name} onChange={handleChange} />
            {errors.name && <p>{errors.name}</p>}

            <input className='inputForm' type="text" placeholder='Introduzca su Email ...' name='email' value={form.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}

            <input className='inputForm' type="tel" placeholder='Introduzca su telefono ...' name='tel' value={form.tel} onChange={handleChange}/>
            {errors.tel && <p>{errors.tel}</p>}

            <textarea className='textArea' placeholder='Contanos en que podemos ayudarte ...' name='text' value={form.text} onChange={handleChange}></textarea>
            {errors.text && <p>{errors.text}</p>}

            <button className='btnEnviar' disabled={disabled()}> ENVIAR </button>
        </form>
            <div className='alert'>
        { openAlert && <Alert style={{
          width: '100%',
          backgroundColor: '#00b6b056'
          }} >
          Su consulta fue enviada con éxito
          </Alert>}

            </div>
       
        
    </div>
  )
}


export default Contacto