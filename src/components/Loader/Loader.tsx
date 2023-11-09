import React from 'react'
import './Loader.css'
import logo from '../../assets/logo1.svg'

const Loader = () => {
  return (
    <div className='loader'>
     <div className="cube-container">
        <div className="cube">
          <div className="face front"><img className='logoCubic' src={logo} alt="" /></div>
          <div className="face back"><img className='logoCubic' src={logo} alt="" /></div>
          <div className="face right"><img className='logoCubic' src={logo} alt="" /></div>
          <div className="face left"><img className='logoCubic' src={logo} alt="" /></div>
          <div className="face top"><img className='logoCubic' src={logo} alt="" /></div>
          <div className="face bottom"><img className='logoCubic' src={logo} alt="" /></div>
        </div>
    </div>

    </div>


  )
}

export default Loader