import React, { useRef } from 'react'
import blankpfp from '../../assets/blank-pfp.webp'
import nexticon from '../../assets/next-icon.png'
import backicon from '../../assets/back-icon.png'
import ethan from '../../assets/Screenshot 2026-01-12 002439.png'
import ellena from '../../assets/ellena.jpeg'
import tiffany from '../../assets/pfp.jpeg'
import marcus from '../../assets/marcus.jpg'
import noel from '../../assets/Screenshot 2026-01-12 003456.png'


const Team = () => {

    const slider = useRef()
    let tx = 0

    const slideForward = () => {
        if(tx > -65){
            tx -= 16.67
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 16.67
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


  return (
    <div className='testimonials'>
        <img src={nexticon} alt="next" className='next-btn' onClick={slideForward}/>
        <img src={backicon} alt="next" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={marcus} alt="user" />
                            <div>
                                <h3>Marcus Aldred-Ganhao</h3>
                                <span>President</span>
                            </div>
                        </div>
                        <p>
                        As President, Marcus is responsible for overseeing 
                        the committee and ensuring that all events run smoothly. 
                        </p>
                    </div>
                </li>

                

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={tiffany} alt="user" />
                            <div>
                                <h3>Tiffany-Miruna Mares</h3>
                                <span>Vice President of Communications</span>
                            </div>
                        </div>
                        <p>
                            Tiffany is responsible for managing the club's social media
                            and answering all enquiries.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={ellena} alt="user" />
                            <div>
                                <h3 className='elena'>Ellena Song</h3>
                                <span>Vice President of Social Affairs</span>
                            </div>
                        </div>
                        <p>
                            Ellena runs all the events and ensures that everyone has a great time 
                            while advancing their career.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={noel} alt="user" />
                            <div>
                                <h3 className='noel-h3'> Noel Johnston </h3>
                                <span> Vice President of External Affairs </span>
                            </div>
                        </div>
                        <p>
                        Noel is responsible for building and maintaining 
                        relationships with external organizations. 
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={ethan} alt="user" />
                            <div>
                                <h3>Ethan Warren</h3>
                                <span>Vice President of Finance</span>
                            </div>
                        </div>
                        <p>
                            Ethan manages all the organization's finances and
                            makes sure we stay within budget.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Team
