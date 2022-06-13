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
      <ReactPlayer  controls url='https://www.youtube.com/watch?v=AluhxxrZU_4' />
      </div>
       <div className="child_container">
     <div className="line_spark"></div>
     <div>
       <h1 style={{marginLeft:'40%',padding:'50px'}}>Our Services</h1>
       <div className="container">
          <div className="row">
            <div className="col" style={{textAlign:'center'}}>
            <img src={img1}  alt="..."/>
              <h5>Family office Services</h5>
              <p>A comprehensive list of services<br/>
               related to anything and everything<br/>
                to do with your finances—we do it<br/>
                 all under one roof.
              </p>
            </div>


            <div className="col" style={{textAlign:'center'}}>
            <img src={img2}  alt="..."/>
            <h5>Financial Planning Services</h5>
            <p>We customize financial plans<br/>
               differently for each and every one<br/>
                of our clients. We do everything <br/>
                from goal-based financial planning,<br/>
                 pre-retirement financial planning,<br/>
                  to retirement, and post-retirement <br/>
                  financial planning.</p>
            </div>



            <div className="col" style={{textAlign:'center'}}>
            <img src={img3}  alt="..."/>
            <h5>Wealth Management Advisory</h5>
            <p> We manage your wealth in such a <br/>
            way to make your money work for<br/>
             you.</p>
            </div>
           
            <div className="col" style={{textAlign:'center'}}>
            <img src={img4}  alt="..."/>
            <h5>Estate and Succession Advisory</h5>
            <p> We partner with some<br/>
              of the best legal firms to <br/>
              help make sure our clients have ironclad<br/>
              wills—we also advise on<br/>
              creating and <br/>
              maintaining trusts.</p>
            </div>
           

            <div className="col" style={{textAlign:'center'}}>
            <img src={img5}  alt="..."/>
            <h5>Real Estate Advisory</h5>
            <p>We partner with<br/>
             reputable real estate <br/>
             firms to ensure our <br/>
             clients have all the help <br/>
             they need with their real <br/>
             estate needs and<br/> queries.</p>
            </div>
           

            <div className="col" style={{textAlign:'center'}}>
            <img src={img6}  alt="..."/>
            <h5>Insurance Advisory</h5>
            <p>We help our clients <br/>
            choose the right kind of<br/> insurance as well as the <br/>right amount of <br/>insurance to keep their<br/> families protected.</p>
            </div>
           
            <div className="col" style={{textAlign:'center'}}>
            <img src={img7} alt="" style={{width:'150%'}} />
            <h5>Accounting and Taxation Advisory</h5>
            <p>We have an in-house<br/>
             accounting division that <br/>
             takes care of all <br/>
             accounting needs so<br/>
              that our clients’ books<br/>
               are up to date, and their <br/>
               taxes properly filed.</p>
            </div>
          </div>
       </div>
     </div>
    </div>
    
     </div>
  )
}
