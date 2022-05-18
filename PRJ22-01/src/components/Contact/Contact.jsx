import React from 'react';
import classes from './contact.module.css';
import location from './../Img/icons8-location-64.png';
import Envelope from './../Img/icons8-secured-letter-50.png';
import mobile from './../Img/icons8-speaker-phone-50.png';

export default function Blog() {
  return (
    <div style={{background:'rgb(247,247,247)'}}>
    <div className={classes.text_cont}>
      <h1>Contact US</h1>
    </div>
    <div className={classes.parent}>
      <div className={classes.child}>
        <ul>
          <li>
            <img src={mobile} alt="Not Found" />
          </li>
          <li style={{color:'#aaadb3'}}>
            +916302488012
          </li>
          <li style={{color:'#aaadb3'}}>040-48539417</li>
        </ul>
      </div>
      <div className={classes.child}>
        <ul>
          <li><img src={location} alt="Not Found" /></li>
          <li style={{color:'#aaadb3'}}>4th Floor Saha Building,Rd Number 11,Banjara Hills,Hyderabad,Telangana 500034</li>
        </ul>
      </div>
      <div className={classes.child}>
        <ul>
          <li>
            <img src={Envelope} alt="Not Found" />
          </li>
          <li style={{color:'#aaadb3'}}>info@gcia.in</li>
        </ul>
      </div>
    </div>
    <div className={classes.form_cont}>
      <form>
        <ul>
          <li>
            <label>
             <input type="text" name="name"  placeholder='Name' style={{width:'400%',padding:'10px',border:'10px solid white',margin:'5%'}}/>
            </label>
          </li>
          <li>
            <label>
             <input type="text" name="name"  placeholder='Email' style={{width:'400%',padding:'10px',border:'10px solid white',margin:'5%'}}/>
            </label>
          </li>
          <li>
            <label>
             <input type="text" name="name"  placeholder='Phone' style={{width:'400%',padding:'10px',border:'10px solid white',margin:'5%'}}/>
            </label>
          </li>
          <li>
            <label>
             <input type="text" name="name"  placeholder='Message' style={{width:'400%',padding:'10px',border:'10px solid white',margin:'5%'}}/>
            </label>
          </li>
          </ul>
      </form>
      <div>
        <button type='submit' style={{padding:'15px',width:'10%',height:'5%',marginLeft:'42px',color:'white',background:'rgb(210,149,55)',border:'none',borderRadius:'5px',marginBottom:'10%'}}>SUBMIT</button>
      </div>
    </div>
    <div className={classes.map_sec}>
      <div></div>
      <div><h4>1st Floor,Indira Chambers,8-2-622/5/A/1,Avenue 4, Road No.10,Banjara Hills,Hyderabad,Telangana 500034</h4></div>
    </div>
    </div>
  )
}
