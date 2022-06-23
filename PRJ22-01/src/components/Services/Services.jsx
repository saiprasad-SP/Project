import React from 'react';
import {Link} from 'react-router-dom';
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
                  <Link className="onClick" to="/services/family-office-services/" rel="bookmark"><h5>Family Office Services</h5></Link>
                  <p style={{color:'#828B8D'}}>A comprehensive list of services <br/>related to anything and everything <br/>to do with your finances—we do it <br/>all under one roof.</p>
                </div>


                <div className="col" style={{textAlign:'center'}}>
                  <img src={img2}  alt="..."/>
                  <Link className="onClick" to="/services/financial-planning-services/" rel="bookmark"><h5>Financial Planing Services</h5></Link>
                  <p style={{color:'#828B8D'}}>We customize financial plans<br/> differently for each and every one <br/>of our clients. We do everything<br/> from goal-based financial planning,<br/>pre-retirement financial planning,<br/>to retirement, and post-retirement<br/> financial planning.</p>
                </div>



                <div className="col" style={{textAlign:'center'}}>
                  <img src={img3}  alt="..."/>
                  <Link className="onClick" to="/services/wealth-management/" rel="bookmark"><h5>Wealth Management Advisory</h5></Link>
                  <p style={{color:'#828B8D'}}> We manage your wealth in such a<br/> way to make your money work for<br/> you.</p>
                </div> 



                <div className="col" style={{textAlign:'center',padding:'30px'}}>
                  <img src={img4}  alt="..."/>
                  <Link className="onClick" to="/services/legal-advisory/" rel="bookmark"><h5>Estate and<br/> Succession Advisory</h5></Link>
                  <p style={{color:'#828B8D'}}> We partner with some<br/> of the best legal firms to<br/> help make sure our <br/>clients have ironclad <br/>wills we also advise on <br/>creating and <br/>maintaining trusts. </p>
                </div>



                <div className="col" style={{textAlign:'center',padding:'30px'}}>
                  <img src={img5}  alt="..."/>
                  <Link className="onClick" to="/services/real-estate-advisory/" rel="bookmark"><h5>Real Estate Advisory</h5></Link>
                  <p style={{color:'#828B8D'}}>We partner with<br/> reputable real estate<br/> firms to ensure our <br/>clients have all the help <br/>they need with their real <br/>estate needs and <br/>queries.</p>
                </div>



                <div className="col" style={{textAlign:'center',padding:'30px'}}>
                  <img src={img6}  alt="..." />
                  <Link className="onClick" to="/services/insurance-advisory/" rel="bookmark"><h5>Insurance Advisory</h5></Link>
                  <p style={{color:'#828B8D'}}>We help our clients<br/> choose the right kind of <br/>insurance as well as the<br/>right amount of insurance<br/> to keep their<br/> families protected.</p>
                </div>



                <div className="col" style={{textAlign:'center'}}>
                  <img src={img7} alt="" />
                  <Link className="onClick" to="/services/accounting-and-taxation-advisory/" rel="bookmark"><h5>Accounting and Taxation Advisory</h5></Link>
                  <p style={{color:'#828B8D'}}>We have an in-house <br/>accounting division that<br/> takes care of all<br/> accounting needs so <br/>that our clients’ books<br/> are up to date, and their <br/>taxes properly filed.</p>
                </div>


                <p> </p>
              </div>
          </div>
        </div>
     </div>
    
     </div>
  )
}
