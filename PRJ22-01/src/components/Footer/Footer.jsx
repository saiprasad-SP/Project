import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {RiCopyrightFill} from 'react-icons/ri'

export default function Footer() {
  return (
    <footer>
      <h5>Guardian Capital Investment Advisors Pvt.Ltd <RiCopyrightFill/> 2022.All rights</h5>
      <h6>reserved(Non-Individual)</h6>
      <div>
        <div class="container">
          <div class="row">
            <div class="col">
              <ul style={{listStyle:'none'}}>
                <li>Terms & Conditions</li>
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
              <BsLinkedin style={{height:'100px'}}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
