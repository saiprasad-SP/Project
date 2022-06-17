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
import H9 from '.././Img/contactform-2.jpg'
// import userLogo from '.././Img/user_female-90x90.png';
import 'react-awesome-slider/dist/styles.css';
import bg from '.././Img/bg-2.png'
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
        <div className={classes.login}>
          <div className={classes.lgn}>
            <button className={classes.login_btn}><h6 className={classes.lgn_btn}>LOGIN TO YOUR ACCOUNT</h6></button>
          </div>
        </div>
        {/* <section className="section bg-c-dark"></section> */}
          {/* <div style={{background:'rgb(185, 141, 59)' }}></div> */}
          {/* <div className="row"></div>     */}
        <div className={classes.grid_container}>
          <div className={classes.grid_child}>
            <img src={Picture} alt="Not Found" style={{height:'100%',width:''}}/>
          </div>
          <div className={classes.grid_child}>
            <div className={classes.childbg}>
              <div>
                {/* <div className={classes.line_spark}></div> */}
                <h1>Trust Guardian Group:</h1>
              </div>
              <div>
                <li>We are a SEBI registered investment advisory firm that takes care of all of your financial needs.</li>
              </div>
              <div>
                <li>Our advisory range includes financial planning, wealth management, accounting, and&nbsp;taxation. We coordinate various other related services such as legal advisory on wills and trusts, advice on buying and/or renting real estate, and insurance advisory.</li>
              </div>
              <div>
                <li>We adhere to the Warren Buffet, Value Investing model for investments -- we treat your money as if it was our own.</li>
                <div className="btn btn-outline-danger shadow" > WATCH VIDEO <i class="bi bi-send"></i></div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.float_container}>
          <div className="col-md-15 text-center" classNaem={classes.floar_child}>
             <h5 className={classes.float_child} style={{color:'white'}}>Call Guardian today and secure your financial future</h5>
          </div>
          <div className="btn btn-outline-danger shadow">GET IN TOUCH <i class="bi bi-send"></i></div>
        </div>        
        <div className="child_container">
        {/* <div className="line_spark"></div> */}
        <div>
          <h1 style={{marginLeft:'0%',padding:'50px'}}>We have you covered</h1>
          <p classNaem="text-center">Sit back, relax, and enjoy your life.</p>
          <div className="container">
              <div className="row">
                <div className="col" style={{textAlign:'center',padding:'15px'}}>
                  <img src={H1} alt="" style={{width:'20%'}} />
                  <h5>Family Offices Services</h5>
                  <p>One stop solution for all your financial requirements.</p>
                </div>
                <div className="col" style={{textAlign:'center',padding:'15px'}}>
                  <img src={H2} alt="" style={{width:'15%'}} />
                  <h5>Financial Planning Services</h5>
                  <p>Highly customized financial plans.</p>
                </div>
                <div className="col" style={{textAlign:'center',padding:'15px'}}>
                  <img src={H3} alt="" style={{width:'20%'}} />
                  <h5>Wealth Management Advisory</h5>
                  <p>We make your money work for you</p>
                </div>
                {/* <p></p>    */}
              </div>
          </div>
        </div>
      </div>
      <div className="child_container">
        {/* <div className="line_spark"></div> */}
        <div>
          <div className="container">
              <div className="row" style={{margin:'50px'}}>
                <div className="col" style={{textAlign:'center',padding:'25px'}}>
                  <img src={H4} alt="" style={{width:'20%'}} />
                  <h5>Accounting And Taxation Advisory</h5>
                  <p>In-house accounting team that consults on accounts and taxes.</p>
                </div>
                <div className="col" style={{textAlign:'center',padding:'25px'}}>
                  <img src={H5} alt="" style={{width:'22%'}} />
                  <h5>Estate And Succession Advisory</h5>
                  <p>We advise on creating wills and trusts, and maintaining trusts.</p>
                 </div>
                <div className="col" style={{textAlign:'center',padding:'25px'}}>
                  <img src={H6} alt="" style={{width:'23%'}} />
                  <h5>Insurance Advisory</h5>
                  <p>We help you choose right kind and right amount of insurance</p>
                </div>
                <div className="col" style={{textAlign:'center',padding:'25px'}}>
                  <img src={H7} alt="" style={{width:'25%'}} />
                  <h5>Real Estate Advisory</h5>
                  <p>We partner with firms who take care of your real estate needs.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      {/* description about the company which is located in different cities */}
      <div style={{backgroundImage: `url(${bg})`}} className={classes.cnt_container}>
        <div className={classes.cnt_child} style={{marginLeft:'380px'}}>
          <h1 style={{color:'white'}}>300+</h1>
          <h5>CLIENTS</h5>
        </div>
        <div className={classes.cnt_child} >
          <h1 style={{color:'white'}}>5+</h1>
          <h5>COUNTRIES</h5>
        </div>
        <div className={classes.cnt_child} >
          <h1 style={{color:'white'}}>20+</h1>
          <h5>CITIES</h5>
        </div>
        <div className={classes.cnt_child} >
          <h1 style={{color:'white'}}>25+</h1>
          <h5>INDUSTRY EXPERTS</h5>
        </div>
      </div>
      <div>
        <div>
          <h1>What Clients Say</h1>
          <h6>Testimonials from our standing customers</h6>
          {/* content corousel */}
        </div>
      </div>
      <div>
        <h6 style={{color:'rgb(135,116,139)',float:'left',position:'absolute'}}>*Displaying SEBI registered complaints as per latest SEBI guideline</h6>
      </div>
      <div><h6 style={{color:'rgb(135,116,139)',float:'left',marginTop:'35px',marginLeft:'5px'}}>Complaints Data Detail</h6></div>
      <div className={classes.container}>
        <img src={H9} alt="not found" style={{height:'25%',width:'100%'}}/>
        <div className={classes.img_left} style={{width:'50%'}}>
          <h1>Have Questions?</h1>
        <h1>Schedule a call.</h1>
        <ul>
          <li><input type="text" placeholder='Name' style={{padding:'10px',width:'100%',margin:'1px'}} /></li>
          <li><input type="text" placeholder='Email' style={{padding:'10px',width:'100%',margin:'1px'}} /></li>
          <li><input type="text" placeholder='Phone' style={{padding:'10px',width:'100%',margin:'1px'}} /></li>
          <li><input type="text" placeholder='Message' style={{paddingTop:'35px',paddingBottom:'35px',paddingLeft:'10px',width:'100%',margin:'1px'}} /></li>
          <li><button style={{background:'rgb(210,149,55)',marginRight:'82%'}}>SEND REQUEST</button></li>
         </ul>
        </div>

      </div>
      {/* <div style={{backgroundImage:`url(${H9})`,backgroundSize:'100%',backgroundRepeat:'no-repeat',padding:'150px'}}>
        
        
      </div> */}
      {/* have questions section */}  
      {/* <div className={classes.gbtn}>
        <h5>GET IN TOUCH</h5>
      </div> */}
    </div>
  )
}
