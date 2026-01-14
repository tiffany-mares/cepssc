import React from 'react'
import './Organizations.css'

import math from '../../assets/math.jpg'
import pi from '../../assets/pi.png'
import socis from '../../assets/socis.png'
import laptop from '../../assets/laptop.png'
import physicsclub from '../../assets/physics-club.png'
import planet from '../../assets/planet.png'
import toxicology from '../../assets/toxicology.png'
import radio from '../../assets/radio.png'
import chem from '../../assets/chem_club.png'
import dna from '../../assets/dna.png'

const Organizations = () => {
    return (
        
        <div className="orgs">
            <div className="constrain">
                <div className="org">
                    <a href="https://www.instagram.com/uogmathandstats/" target="_blank" rel="noopener noreferrer">
                        <img src={math} alt="math" />
                        <div className="caption-2">
                            <img src={pi} alt="pi sign" />
                            <p>Check us out!</p>
                        </div>
                    </a>
                </div>
                <div className="additional-info">
                        <h3> Mathematics & Statistics Club </h3>
                        <p> 
                            <br />
                            The Math & Stats club is devoted to 
                            providing math-loving students a sense 
                            of community at the university. We host 
                            a variety of events, ranging from academic 
                            workshops to trivia and social nights. 
                            Come out to our events for free food and 
                            to meet our amazing team! 
                            <br /><br /><br /><br /><br /><br /><br />
                        </p>
                </div>
            </div>

            <div className="constrain">
                <div className="org">
                    <a href="https://www.socis.ca/" target="_blank" rel="noopener noreferrer">
                        <img src={socis} alt="socis" />
                        <div className="caption-2">
                            <img src={laptop} alt="coding" />
                            <p>Check us out!</p>
                        </div>
                    </a>
                </div>
                <div className="additional-info">
                        <h3> Society of Computing & Information Science </h3>
                        <p> 
                            The official student society for the School
                            of Computer Science students at the University of 
                            Guelph. They focus on community building, creating 
                            opportunities for students, and advocating for 
                            students interests. They also run events, organize 
                            hackathons, and administer clubs. They play a role in 
                            uniting students and improving their university 
                            experience. Through this role their goal is to empower 
                            students to innovate, network, and succeed because 
                            you are what makes the University of Guelph 
                            great.
                        </p>
                </div>
            </div>

            <div className="constrain">
                <div className="org">
                    <a href="https://www.physics.uoguelph.ca/physics-club" target="_blank" rel="noopener noreferrer">
                        <img src={physicsclub} alt="physics" />
                        <div className="caption-2">
                            <img src={planet} alt="planet" />
                            <p>Check us out!</p>
                        </div>
                    </a>
                </div>
                <div className="additional-info">
                        <h3> Physics and Astronomy Club </h3>
                        <p> <br />
                            The Physics and Astronomy Club is a student-run 
                            group interested in and enthusiastic about all 
                            things physics and space related. All Majors, 
                            Minors and Colleges are welcome to attend 
                            meetings and events. For updates on our events 
                            contact physclub@uoguelph.ca, join our Discord, 
                            or follow us on Instagram and Facebook.  
                            <br /><br />
                        </p>
                </div>
            </div>

            <div className="constrain">
                <div className="org">
                    <a href="https://www.instagram.com/uofgtoxsa/" target="_blank" rel="noopener noreferrer">
                        <img src={toxicology} alt="toxic" />
                        <div className="caption-2">
                            <img src={radio} alt="radiation" />
                            <p>Check us out!</p>
                        </div>
                    </a>
                </div>
                <div className="additional-info">
                        <h3> Toxicology Student Association </h3>
                        <p> We are a student association representing 
                            the Biomedical Toxicology student body, 
                            running events and alerting students of 
                            updates from faculty and the College of 
                            Engineering and Physical Sciences. We are 
                            also responsible for organizing the annual 
                            Toxicology symposium, which is open to 
                            everyone with an interest in toxicology. 
                            <br /><br />
                        </p>
                </div>
            </div>

            <div className="constrain">
                <div className="org">
                    <a href="https://www.instagram.com/uog_chem_club/" target="_blank" rel="noopener noreferrer">
                        <img src={chem} alt="nanoscience" />
                        <div className="caption-2">
                            <img src={dna} alt="dna" />
                            <p>Check us out!</p>
                        </div>
                    </a>
                </div>
                <div className="additional-info">
                        <h3> Chemistry Club</h3>
                        <p> <br />
                        Student-led group where members explore 
                        chemistry through experiments, discussions, 
                        and outreach activities. It fosters curiosity, 
                        teamwork, and hands-on learning, promoting a 
                        deeper understanding of chemical principles 
                        and their real-world applications.  
                            <br /><br /><br /><br />
                        </p>
                </div>
            </div>

        </div>

        
    )
}

export default Organizations
