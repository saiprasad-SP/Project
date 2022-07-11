import React from 'react';
import {GiWatch} from 'react-icons/gi';
import {BsFillEyeFill} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import Auht1 from '../../Img/Amit-1.jpg';
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
                <ExternalLink href='https://www.linkedin.com/in/amit-sharma-09824ab/' target='_self'>
                <img src={Lin} alt="linkdln link not found" className='linkdln' />
                </ExternalLink>
            </div>
            <div className='about_auth'>
                <ul>
                    <li>Around 7 years of experience in corporate finance & strategy, funds raising & restructuring with siva Group, a mini conglomerate and later as a AVP with ProBiz Advisors, a Mumbai based financial services start-up.</li>
                    <li>Over 3 years of enterpreneurial experience with complete ownership of all verticals for a Trading Firm.</li>
                    <li>MBA in Finance & Marketing from Indian Institute of Management, Lucknow.</li>
                    <li>B-Tech in Electrical Engineering from Indian Institue of Technology, Delhi</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
