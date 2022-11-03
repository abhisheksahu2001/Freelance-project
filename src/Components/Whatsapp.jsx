import React from 'react'
import wapp from '../Static/whatsapp-873316_1280.png'
import './whatsapp.css'
const Whatsapp = () => {
    return (
        <div className='Whatsapp_float'>
            <a href="https://wa.me/919111588222" >
                <img src={wapp} width='50px' className='whatsapp_float_btn' />
            </a>
        </div>
    )
}

export default Whatsapp