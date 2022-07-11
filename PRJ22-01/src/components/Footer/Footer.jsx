import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {RiCopyrightFill} from 'react-icons/ri';
import {ExternalLink} from 'react-external-link';
import {Link,BrowserRouter as Router} from 'react-router-dom';
import investor from '../Img/Document/Investor-Charter-in-respect-of-Investment-advisor.pdf';
import grievance from '../Img/Document/Compliant-redressal-.pdf'; 
import './Footer.css';
import Ts from './TermsConditions';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';

export default function Footer() {
  return (
    <Router>
      <footer>
        <h5>Guardian Capital Investment Advisors Pvt.Ltd <RiCopyrightFill/> 2022.All rights</h5>
        <h6>reserved(Non-Individual)</h6>
        <div className='fgrid_container'>
          <span className='sgrid_container'>
              <Link to={'/Ts'} target='_top' className='Link'>Terms & Conditions</Link>
              <Link to={'/PrivacyPolicy'} className='Link' target='_top'>Privacy Policy</Link>
              <ExternalLink href={investor} className='Link' target='_self'>Investor Charter</ExternalLink>
              <ExternalLink href={grievance} className='Link' target='_self'>Grievance Redressal</ExternalLink>
            </span>
          <span>
            <h5 className='Faddrs'><b>SEBI </b>registration number:INA200005380</h5>
            <h5>valid till-August 16,2026</h5>
            <h5>Principal Officer-Aseem Sen Gupta</h5>
            <h5><b>M:</b>9560030404 <b>E:</b>aseem.gupta@gcia.in</h5>
          </span>
          <span>
            <ExternalLink href='https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fguardian-capital-investment-advisors%2Fabout%2F' rel="noreferrer noopener" target='_self' className='Link'>
              <BsLinkedin style={{height:'100px'}}/>
            </ExternalLink>
          </span>
        </div>
      </footer>
    </Router>
  )
}
