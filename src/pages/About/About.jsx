import React from 'react'
import './About.css'
import summitlady from '../../assets/summit-lady.png'
import programs from '../../assets/programs.png'

import Team from './Team'
import './Team.css'

import Organizations from '../Organizations/Organizations'


const About = () => {
  return (
    <>
    <div className='about'>
        <div className="about-left">
            <h2> ABOUT CCMPSSC </h2>
            <p> The College of Computational, Mathematical, and Physical Sciences 
                Student Council (CCMPSSC) helps to ensure the wellbeing
                of all students in CCMPS. We seek to maintain harmonious 
                and effective communication between the college,
                students, alumni associations and the university community 
                at large. We run events throughout the year and promote 
                opportunities from clubs and other organizations, so be 
                sure to follow us on social media to not miss out! </p>
        </div>
        <div className="about-right">
            <img src={summitlady} alt="lady-photo" className='about-img'/>
        </div>
    </div>
    <div className='about-2'>
        <h2> Who is part of CCMPSSC?</h2>
        <img src={programs} alt="programs" />
    </div>
    <div className='about-3'>
        <h2 className='blue'> Meet the Team</h2>
    </div>
    <Team />
    </>
  )
}

export default About
