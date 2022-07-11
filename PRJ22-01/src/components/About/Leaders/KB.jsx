import React from 'react';
import {GiWatch} from 'react-icons/gi';
import {BsFillEyeFill} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import { ExternalLink } from 'react-external-link';
import Auht1 from '../../Img/Kripa1-770x744.jpg';
// import {GrLinkedin} from 'react-icons/gr';
import Lin from '../../Img/icons8-linkedin-50.png'
import './leaders.css';

export default function KB() {
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
                <h1>Kripa Bhattarai</h1>
            </div>
        </div>
        <div className='flex_container'>
            <div className='leader_section'>
             <img src={Auht1} alt="user not found" className='Auth1'/>
                <ExternalLink href='https://www.linkedin.com/in/kripa-b-19132b119/' target='_self'>
                    <img src={Lin} alt="linkdln link not found" className='linkdln' />
                </ExternalLink>
            </div>
            <div className='about_auth'>
                <ul>
                    <li>Head of Human Resources for Guardian Group.</li>
                    <li>Experienced in:marketing, pblic relations, team building strategy, hiring and recruitment.</li>
                    <li>Has worked in:the 'affordable art' marketing in India, event coordination and management in the pharmaceutical industry.</li>                </ul>
                    <li>Studied psychology at the University of British Columbia, Vancouver, Canada.</li>
            </div>
        </div>
    </div>
  )
}
