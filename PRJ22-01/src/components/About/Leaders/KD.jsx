import React from 'react';
import {GiWatch} from 'react-icons/gi';
import {BsFillEyeFill} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import Auht1 from '../../Img/kartik1-770x744.jpg';
import { ExternalLink } from 'react-external-link';
// import {GrLinkedin} from 'react-icons/gr';
import Lin from '../../Img/icons8-linkedin-50.png'

import './leaders.css';

export default function KD() {
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
                <h1>Kartik Damodar</h1>
            </div>
        </div>
        <div className='flex_container'>
            <div className='leader_section'>
                <img src={Auht1} alt="user not found" className='Auth1'/>
                <ExternalLink href='https://www.linkedin.com/in/kartikinformation/' target='_self'>
                 <img src={Lin} alt="linkdln link not found" className='linkdln' />
                </ExternalLink>
            </div>
            <div className='about_auth'>
                <ul>
                    <li>Over 10 years of experience in finance industry including investment banking, strategy, and operational consulting, and wealth management.</li>
                    <li>Part of the prestigious business transformation team at American Express, based in New York and New Delhi, and also a part of the research team at Dundee Securities Investment Bank in Toronto, Where he developed and updated various financial models.</li>
                    <li>MBA from the University of British Columbia and B Com from the University of Windsor.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
