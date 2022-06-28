import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {RiCopyrightFill} from 'react-icons/ri';
import {ExternalLink} from 'react-external-link';
import {Link,BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Ts from './TermsConditions';
export default function Footer() {
  return (
    <Router>
      <footer>
        <h5>Guardian Capital Investment Advisors Pvt.Ltd <RiCopyrightFill/> 2022.All rights</h5>
        <h6>reserved(Non-Individual)</h6>
        <div>
          <div class="container">
            <div class="row">
              <div class="col">
                <ul style={{listStyle:'none'}}>
                  <li ><Link to={'/Ts'} target='_blank'>Terms & Conditions</Link></li>
                  <li>Privacy Policy</li>
                  <li>Investor Charter</li>
                  <li>Grievance Redressal</li>
                </ul>
              </div>
              <div class="col">
                <h5><b>SEBI </b>registration number:INA200005380</h5>
                <h5>valid till-August 16,2026</h5>
                <h5>Principal Officer-Aseem Sen Gupta</h5>
                <h5><b>M:</b>9560030404 <b>E:</b>aseem.gupta@gcia.in</h5>
              </div>
              <div class="col">
              <ExternalLink href='https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fguardian-capital-investment-advisors%2Fabout%2F' rel="noreferrer noopener" target='_self'>
                <BsLinkedin style={{height:'100px'}}/>
              </ExternalLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Routes>
        <Route path='/Ts' element={<Ts/>}/>
      </Routes>
    </Router>
  )
}
