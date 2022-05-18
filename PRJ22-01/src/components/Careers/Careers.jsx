import React from 'react';
import classes from './Career.module.css';
import {ImForward} from 'react-icons/im';

export default function Careers() {
  return (
    <div>
      <div className={classes.cont1}>
        <ul>
          <li>
            <h1>Invest in Your Career</h1>
          </li>
          <li>
            We are always on the lookout for like-minded, self-motivated individuals who are keen on joining us.
          </li>
          <li>
            Send us your profiles at <strong><a href="/">hr@gcia.in</a></strong>
          </li>
        </ul>
      </div>
      <div className={classes.cont2} >
        <div className={classes.cont2_cont1}>
          <p><b>Guardian Culture:</b>Our culture is unique and favors ambition,integrity, and excellent work ethic</p>
          <ul style={{marginLeft:'-5%'}}>
            <li>
              <ImForward style={{color:'rgb(210,149,55)'}}/> Dynamic workspace, but consistently structured processes
            </li>
            <li>
              <ImForward style={{color:'rgb(210,149,55)'}}/>Emphasis on nurturing and growing talent-critical thinking
            </li>
            <li>
            <ImForward style={{color:'rgb(210,149,55)'}}/>A unique mix of experience and ingenuity—innovation cannot happen without new ideas and nothing generates new ideas like ingenuity. Combine that with unwavering experience and you have a great combination.
            </li>
            <li><ImForward style={{color:'rgb(210,149,55)'}}/>Static hierarchy – open seating—we believe in equality among our employees, whether it’s the CEO or the youngest analyst.</li>
            <li><ImForward style={{color:'rgb(210,149,55)'}}/>Strict focus on following all compliance related rules—we take rules very seriously, and we make sure we follow the letter of the law to the t.</li>
            <li><ImForward style={{color:'rgb(210,149,55)'}}/>Dedicated to constant learning and skill building—a team is only as strong as its weakest member—or so the saying goes. Constant learning is the key to making sure our team stays on top of things.</li>
            <li><ImForward style={{color:'rgb(210,149,55)'}}/>Lean management—we believe in cutting out excessive red tape—each and every team member has a vibrant role to play.</li>
          </ul>
        </div>
        <div className={classes.cont2_cont2}>
        <h1>Join Us</h1>
        <form action="#">
          <ul>
            <li>
              <label>
                <input type="text" name="text" id="name" placeholder='Name' style={{width:'450px',padding:'10px',borderRadius:'5px',border:'none'}}/>
              </label>
            </li>
            <li>
              <label>
                <input type="text" name="text" id="name" placeholder='Email' style={{width:'450px',padding:'10px',borderRadius:'5px',border:'none'}}/>
              </label>
            </li>
            <li>
              <label>
                <input type="text" name="text" id="name" placeholder='Phone' style={{width:'450px',padding:'10px',borderRadius:'5px',border:'none'}}/>
              </label>
            </li>
            <li>
              <input type="file" name="" id="" />
            </li>
            <li>
              <button style={{padding:'15px',width:'200px',border:'none',color:'white',background:'rgb(210,149,55)',borderRadius:'5px'}}>SUBMIT REQUEST</button>
            </li>
          </ul>
        </form>
        </div>
      </div>
      <div style={{height:'95px',background:'white'}}></div>
    </div>
  );
}
