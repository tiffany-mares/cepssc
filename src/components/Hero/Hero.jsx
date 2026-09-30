import React from 'react'
import './Hero.css'
import instagram from '../../assets/instagram.avif'


const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1> College of Computational, Mathematical, and Physical Sciences Student Council </h1>
        <p> Explore our accounts and stay in touch!</p>
        
        <div className="agm-notice">
          <p>Our Annual General Meeting is coming up — everyone is welcome to attend!</p>
          <a href="/CCMPSSC_AGM%20Agenda_26_27.pdf" target="_blank" rel="noopener noreferrer" className="btn">
            View the AGM Agenda
          </a>
        </div>

        <div>
          <a href="https://www.instagram.com/ccmpssc" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" className="icon"/>
          </a>
        </div>

      </div>
    </div>
  )
}
export default Hero
