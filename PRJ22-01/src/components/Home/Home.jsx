import React from 'react';
import {Zoom} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'  
import Picture from '../Img/picture.jpg'
import logo1 from './../Img/guardian-capital-investment-advisors-hyderabad.jpg';
import logo2 from './../Img/guardian-capital-investment-advisors-india.jpg';
import logo3 from './../Img/gcia-wealth-management-services.jpg';
import logo4 from './../Img/secure-your-financial-future.jpg';
import logo5 from './../Img/guardian-capital-investments-advisors.png'
import H1 from '../Img/H1.jpg'
import H2 from '../Img/H2.jpg'
import H3 from '../Img/H3.jpg'
import H4 from '../Img/H4.jpg'
import H5 from '../Img/H5.jpg'
import H6 from '../Img/H6.jpg'
import H7 from '../Img/H7.jpg'
import H9 from '../Img/H9.jpg'
import classes from './Home.module.css';


const images = [logo1, logo2, logo3, logo4,logo5];

const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    //scale: 0.4,
    arrows: true
  };
  
  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <img key={index} style={{ width: "100%" }} src={each} alt="Not Found" />
          ))}
        </Zoom>
      </div>
    );
  };
export default function Home() {
  return (
     <div className={classes.slider}>
       <Slideshow/>
        <section className="section bg-c-dark"></section>
         <div style={{background:'rgb(185, 141, 59)' }}></div>
             <div className="row"></div>    
        <div className={classes.flex_container}>
        <div className={classes.flex_child}>
          <div className={classes.childbg}>
            <div style={{textAlign:'center'}}>
              <div className={classes.line_spark}></div>
              <h1>Trust Guardian Group:</h1>
            </div>
            <div style={{width:'65%',height:'20%',marginLeft:'20%', padding:'15px'}}>
            <li>We are a SEBI registered investment advisory firm that takes care of all of your financial needs.</li>
            </div>
            <div style={{width:'65%',height:'20%',marginLeft:'20%', padding:'15px' }}>
            <li>Our advisory range includes financial planning, wealth management, accounting, and&nbsp;taxation. We coordinate various other related services such as legal advisory on wills and trusts, advice on buying and/or renting real estate, and insurance advisory.</li>
            </div>
            <div style={{width:'65%',height:'20%',marginLeft:'20%', padding:'15px'}}>
            <li>We adhere to the Warren Buffet, Value Investing model for investments -- we treat your money as if it was our own.</li>
            <div className="btn btn-outline-danger shadow" > WATCH VIDEO <i class="bi bi-send"></i></div>
            </div>
          </div>
        </div>
        <div className={classes.flex_child}>
          <img src={Picture} alt="Not Found" />
        </div>
    </div>
         <div style={{background:'rgb(185, 141, 59)' }}>
        <div className="col-md-15 text-center">
        <h5 className="heading text-center">Call Guardian today and secure your financial future</h5>
        <div className="btn btn-outline-danger shadow">GET IN TOUCH <i class="bi bi-send"></i></div>
        </div>
        </div>        
       <div className="child_container">
     <div className="line_spark"></div>
     <div>
       <h1 style={{marginLeft:'0%',padding:'50px'}}>We have you covered</h1>
       <p classNaem="text-center">Sit back, relax, and enjoy your life.</p>
       <div className="container">
          <div className="row">
            <div className="col" style={{textAlign:'center'}}>
            <img src={H1} alt="" style={{width:'20%'}} />
              <h5>Family Offices Services</h5>
              <p>One stop solution for all your financial<br/>
              requirements.
              </p>
            </div>
            <div className="col" style={{textAlign:'center'}}>
            <img src={H2} alt="" style={{width:'15%'}} />
            <h5>Financial Planning Services</h5>
            <p>Highly customized financial plans.</p>
            </div>



            <div className="col" style={{textAlign:'center'}}>
            <img src={H3} alt="" style={{width:'20%'}} />
            <h5>Wealth Management Advisory</h5>
            <p>We make your money work for you</p>
            </div>
            <p></p>
          
              
          </div>
       </div>
     </div>
    </div>



    <div className="child_container">
     <div className="line_spark"></div>
     <div>
       <div className="container">
          <div className="row">
            <div className="col" style={{textAlign:'center'}}>
            <img src={H4} alt="" style={{width:'20%'}} />
              <h5>Accounting And<br/>
              Taxation Advisory</h5>
              <p>One stop solution for all your financial<br/>
              requirements.
              </p>
            </div>


            <div className="col" style={{textAlign:'center'}}>
            <img src={H5} alt="" style={{width:'22%'}} />
            <h5>Estate And Succession<br/>
            Advisory</h5>
            <p>Highly customized financial plans.</p>
            </div>



            <div className="col" style={{textAlign:'center'}}>
            <img src={H6} alt="" style={{width:'23%'}} />
            <h5>Insurance Advisory</h5>
            <p>We make your money work for you</p>
            </div>
            

            <div className="col" style={{textAlign:'center'}}>
            <img src={H7} alt="" style={{width:'25%'}} />
            <h5>Real Estate Advisory</h5>
            <p>We make your money work for you</p>
            </div>

          
          </div>
       </div>
     </div>
    </div>





    
    
{/* have questions section */}
<div style={{background:'rgb(247,247,247)' }}>
<img src={H9} alt="Not found" style={{width:'100%',height:'900px'}}/>

    <div className={classes.text_cont}>
      <h1>Have Questions?</h1>
    </div>
    <div className={classes.parent}>
     <div className={classes.child}>
        <ul>
          <h1 >Schedule a call.</h1>
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
        <button type='submit' style={{padding:'15px',width:'10%',height:'5%',marginLeft:'42px',color:'white',background:'rgb(210,149,55)',border:'none',borderRadius:'5px',marginBottom:'10%'}}>SEND REQUEST</button>
      </div>
    </div>
    <div className={classes.map_sec}>
      <div></div>
      <div></div>
    </div>
    </div>
    <div className={classes.gbtn}>
         <h5>GET IN TOUCH</h5>
       </div>
     </div>
  )
}
