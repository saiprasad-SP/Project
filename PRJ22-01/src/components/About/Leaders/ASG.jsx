import React from 'react';
import {GiWatch} from 'react-icons/gi';
import {BsFillEyeFill} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import Auht1 from '../../Img/Aseem-1-770x744.jpg';
// import { GrLinkedin } from 'react-icons/gr';
import { ExternalLink } from 'react-external-link';
import Lin from '../../Img/icons8-linkedin-50.png'

import './leaders.css';

export default function ASG() {
  return (
    <div style={{marginBottom:'75px'}}>
        <div className='disp_cont'>
            <div className='headers'>
                <span  className='span'>PROFESSIONAL TEAM</span>
                <span  className='span'><GiWatch/>NOVEMBER10,2017</span>
                <span  className='span'><BsFillEyeFill/> 306 VIEWS</span>
                <span  className='span'><AiOutlineHeart/> 0 LIKES</span>
            </div>
            <div>
                <h1>Aseem Sen Gupta</h1>
            </div>
        </div>
        <div className='flex_container'>
            <div className='leader_section'>
                <img src={Auht1} alt="not found" className='Auth1'/>
                <ExternalLink href='https://www.linkedin.com/in/aseem-sen-gupta-3a3ab318/' target='_self'>
                <img src={Lin} alt="linkdln link not found" className='linkdln' />
                </ExternalLink>
            </div>
            <div className="about_auth">
                <h6>E-mail:aseem.gupta@gcia.in</h6>
                <ul>
                 <li>Over 10 years of experience in food tech (Zomato), e-commerce (Snap Deal), financial services (American Express) and consulting (Bristelcone) including sales, strategy & and operations, financial planning. </li>
                 <li>Worked as a VP at Zomato prior to joining Guardian Capital.</li>
                 <li>MBA in General Management from Indian Institute of Management, Luucknow.</li>
                 <li>B.E. in Electronics & Communications from MIT, Manipal.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
