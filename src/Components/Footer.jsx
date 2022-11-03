import React from 'react'
import './footer.css'
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../Static/logo/techpro.svg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
  return (
    <>
      <div class="footer">
        <div class="heading">
          <img class="logo" src={logo} />
          <h2>TecProduct<sup>&trade;</sup></h2>
        </div>
        <div className='details'>
          <div class="content">
            <div class="links">
              <p><a href="#">Home</a></p>
              <p><a href="#">About</a></p>
              <p><a href="#">Contact</a></p>
            </div>
          </div>
          <div class="contect-info">
            <div className='detail'><PhoneIcon /><p>9111588222</p></div>
            <div className='detail'><EmailIcon /><p>Contact@tecproduct.in</p></div>
            <div className='detail'><PlaceIcon /><p>295,GULAB BAGH,BOMBAY<br />HOSPITAL, INDORE - 452010 </p></div>
          </div>
        </div>

        <footer>
          <hr />
          &copy; 2021 TecProduct Pvt. Ltd.
        </footer>
      </div>
    </>
  )
}

export default Footer