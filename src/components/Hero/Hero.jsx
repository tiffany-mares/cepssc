import React from 'react'
import './Hero.css'
import instagram from '../../assets/instagram.avif'


const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1> College of Computational, Mathematical, and Physical Sciences Student Council </h1>
        <p> Explore our accounts and stay in touch!</p>
        
        <a href="https://www.instagram.com/ccmpssc" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram" className="icon"/>
        </a>

      </div>
    </div>
  )
}
export default Hero
