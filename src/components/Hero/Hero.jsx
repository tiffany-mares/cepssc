import React from 'react'
import './Hero.css'
import instagram from '../../assets/instagram.avif'
import facebook from '../../assets/facebook.jpg'
import twitter from '../../assets/twitter.webp'


const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1> College of Computational, Mathematical, and Physical Sciences Student Council </h1>
        <p> Explore our accounts and stay in touch!</p>
        
        <a href="https://www.instagram.com/cepssc" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram" className="icon"/>
        </a>
        <a href="https://x.com/uofgcepssc" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="twitter" className="icon"/>
        </a>
        <a href="https://www.facebook.com/CEPSSC/" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="facebook" className="icon"/>
        </a>

      </div>
    </div>
  )
}
export default Hero
