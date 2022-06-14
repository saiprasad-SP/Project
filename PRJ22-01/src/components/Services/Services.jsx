import React from 'react';
import img1 from './../Img/Services_img/family-3-370x208.png';
import img2 from './../Img/Services_img/finanace-planning-1-370x208.png';
import img3 from './../Img/Services_img/hni-wealth-management-india-370x208.jpg';
import img4 from './../Img/Services_img/estate-planning-1-350x208.png';
import img5 from './../Img/Services_img/real-estate-350x208.png';
import img6 from './../Img/Services_img/insurance-2-350x208.png';
import img7 from './../Img/Services_img/estate-successory-advisory-1-370x208.jpg';
import './Services.module.css';
import ReactPlayer from 'react-player'
export default function Services() {
  return ( 
    <div>
      <div className="container">
        <ReactPlayer  controls url='https://www.youtube.com/watch?v=AluhxxrZU_4' style={{marginTop:'20px',marginLeft:'275px',marginBottom:'10px',opacity:'0.8'}} />
      </div>
      <div className="child_container">
        <div className="line_spark"></div>
        <div style={{background:'rgb(230,230,230)'}}>
          <h1 style={{marginLeft:'40%',padding:'50px'}}>Our Services</h1>
          <div className="container">
              <div className="row">
                <div className="col" style={{textAlign:'center'}}>
                  <img src={img1}  alt="..."/>
                  <h5>Family office Services</h5>
                  <p>A comprehensive list of services related to anything and everything to do with your finances—we do it all under one roof.</p>
                </div>
                <div className="col" style={{textAlign:'center'}}>
                  <img src={img2}  alt="..."/>
                  <h5>Financial Planning Services</h5>
                  <p>We customize financial plans differently for each and every one of our clients. We do everything from goal-based financial planning,pre-retirement financial planning,to retirement, and post-retirement financial planning.</p>
                </div>
                <div className="col" style={{textAlign:'center'}}>
                  <img src={img3}  alt="..."/>
                  <h5>Wealth Management Advisory</h5>
                  <p> We manage your wealth in such a way to make your money work for you.</p>
                </div> 
                <div className="col" style={{textAlign:'center'}}>
                  <img src={img4}  alt="..."/>
                  <h5>Estate and Succession Advisory</h5>
                  <p> We partner with some of the best legal firms to help make sure our clients have ironclad wills we also advise on creating and maintaining trusts </p>
                </div>
                <div className="col" style={{textAlign:'center'}}>
                  <img src={img5}  alt="..."/>
                  <h5>Real Estate Advisory</h5>
                  <p>We partner with reputable real estate firms to ensure our clients have all the help they need with their real estate needs and queries.</p>
                </div>
                <div className="col" style={{textAlign:'center'}}>
                  <img src={img6}  alt="..." />
                  <h5>Insurance Advisory</h5>
                  <p>We help our clients choose the right kind of insurance as well as theright amount ofinsurance to keep their families protected.</p>
                </div>
                <div className="col" style={{textAlign:'center'}}>
                  <img src={img7} alt="" style={{width:'150%'}} />
                  <h5>Accounting and Taxation Advisory</h5>
                  <p>We have an in-house accounting division that takes care of all accounting needs so that our clients’ books are up to date, and their taxes properly filed.</p>
                </div>
              </div>
          </div>
        </div>
     </div>
    
     </div>
  )
}
