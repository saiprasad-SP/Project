import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Home.css'
// import Popup from 'reactjs-popup';
// import {Zoom} from 'react-slideshow-image';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {Link} from 'react-router-dom';
// import 'react-slideshow-image/dist/styles.css'
import Picture from '../Img/picture.jpg'
// import logo1 from './../Img/guardian-capital-investment-advisors-hyderabad.jpg';
// import logo2 from './../Img/guardian-capital-investment-advisors-india.jpg';
// import logo3 from './../Img/gcia-wealth-management-services.jpg';
// import logo4 from './../Img/secure-your-financial-future.jpg';
// import logo5 from './../Img/guardian-capital-investments-advisors.png'
import H1 from '../Img/H1.jpg'
import H2 from '../Img/H2.jpg'
import H3 from '../Img/H3.jpg'
import H4 from '../Img/H4.jpg'
import H5 from '../Img/H5.jpg'
import H6 from '../Img/H6.jpg'
import H7 from '../Img/H7.jpg'
import H9 from '.././Img/contactform-2.jpg'
import userLogo from '.././Img/user_female-90x90.png';
import 'react-awesome-slider/dist/styles.css';
import bg from '.././Img/bg-2.png'
import classes from './Home.module.css';
import './slider-animation.css';
// const images = [logo1, logo2, logo3, logo4,logo5]; 

const content = [
  {
    title: "WE TAKE CARE OF ANYTHING AND EVERYTHING",
    description:
      "RELATED TO YOUR FINANCES",
    image: "https://www.gcia.in/wp-content/uploads/2018/11/guardian-capital-investment-advisors-hyderabad.jpg",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "SO THAT YOU CAN",
    description:
      "BREEZE THROUGH LIFE",
    image: "https://www.gcia.in/wp-content/uploads/2018/11/secure-your-financial-future.jpg",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "WHILE HITTING",
    description:
      "ALL YOUR GOALS",
    image: "https://www.gcia.in/wp-content/uploads/2018/11/guardian-capital-investment-advisors-india.jpg",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  },
  {
    title: "AND PROTECTING",
    description:
      "YOUR FAMILY",
    image: "https://www.gcia.in/wp-content/uploads/2018/11/gcia-wealth-management-services.jpg",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  },
  {
    title: "TRUST GUARDIAN GROUP",
    description:
      "YOUR GUARDIAN ANGELS FOR LIFE",
    button: "WATCH VIDEO",
    image: "https://www.gcia.in/wp-content/uploads/2018/12/guardian-capital-investments-advisors.png",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  }
];
// const zoomOutProperties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   //scale: 0.4,
//   arrows: true
// };
// const Slideshow = () => {
//   return (
//     <div className="slide-container">
//       <Zoom {...zoomOutProperties}>
//         {images.map((each, index) => (
//           <img key={index} style={{ width: "100%" }} src={each} alt="Not Found" />
//         ))}
//       </Zoom>
//     </div>
//   );
// };
export default function Home() {
  return (
    <div className={classes.slider}>
        {/* <Slideshow/> */}
        <Slider className="slider-wrapper" autoplay duration={2000}>
            {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <div className="inner">
                <p>{item.title}</p>
                <h1>{item.description}</h1>
                <button>{item.button}</button>
              </div>
              <section>
                {/* <img src={item.userProfile} alt={item.user} /> */}
                {/* <span>
                  Posted by <strong>{item.user}</strong>
                </span> */}
              </section>
            </div>
          ))}
        </Slider>
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
                <div className="btn btn-outline-danger shadow" > WATCH VIDEO <i className="bi bi-send"></i></div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.float_container}>
          <div className="col-md-15 text-center">
             <h5 className={classes.float_child} style={{color:'white'}}>Call Guardian today and secure your financial future</h5>
          </div>
          <div className="btn btn-outline-danger shadow">GET IN TOUCH <i className="bi bi-send"></i></div>
        </div>        
        <div className="child_container">
        {/* <div className="line_spark"></div> */}
        <section className='section3'>
          <h1 style={{marginLeft:'0%',padding:'50px'}}>We have you covered</h1>
          <p className="text-center">Sit back, relax, and enjoy your life.</p>
          <section>
            <div className='section_gridContainer1'>
              <span><Link to="/family-office-services">
                  <img src={H1} alt="" />
                  <h5>Family Offices Services</h5>
                  <p>One stop solution for all your financial requirements.</p>
                  </Link></span>
              <span><Link to="/financial-planning-services">
                  <img src={H2} alt="" style={{width:'15%'}} />
                  <h5>Financial Planning Services</h5>
                  <p>Highly customized financial plans.</p>
                  </Link></span>
              <span><Link to="/wealth-management">
                  <img src={H3} alt="" style={{width:'20%'}} />
                  <h5>Wealth Management Advisory</h5>
                  <p>We make your money work for you</p>
                  </Link></span>
            </div>
            <div className='section_gridContainer2'>
              <span><Link to="/legal-advisory">
                  <img src={H4} alt="" style={{width:'20%'}} />
                  <h5>Accounting And Taxation Advisory</h5>
                  <p>In-house accounting team that consults on accounts and taxes.</p>
                  </Link></span>
              <span><Link to="/real-estate-advisory">
                  <img src={H5} alt="" style={{width:'22%'}} />
                  <h5>Estate And Succession Advisory</h5>
                  <p>We advise on creating wills and trusts, and maintaining trusts.</p>
                  </Link></span>
              <span> <Link to="/insurance-advisory">
                  <img src={H6} alt="" style={{width:'23%'}} />
                  <h5>Insurance Advisory</h5>
                  <p>We help you choose right kind and right amount of insurance</p>
                  </Link></span>
              <span><Link to="/accounting-and-taxation-advisory">
                  <img src={H7} alt="" style={{width:'25%'}} />
                  <h5>Real Estate Advisory</h5>
                  <p>We partner with firms who take care of your real estate needs.</p>
                  </Link></span>
            </div>
          </section>
        </section>
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
          {/* content corousel */}
          {/* The carousel that has been used in here is from react-elastic-carousel */}
        <div style={{marginTop:'10%',marginBottom:'10%'}}>
          <h1>What Clients Say</h1>
          <h6>Testimonials from our standing customers</h6>
          <Carousel enableAutoPlay showArrows={false}>
            <div>
              <img src={userLogo} alt="UserLogo Not found" />
              <p style={{marginRight:'5%',marginLeft:'5%',lineHeight:'2',color:'#9F9F9F'}}>When I met GCIA for my managing my dad’s retirement fund, I really felt these guys knew what they were talking about. They are very professional and courteous, and come up with a plan after listening patiently to all your goals. A SPOC is assigned for each customer and they are easily approachable over WhatsApp or call. They also send you monthly reports so that you can see the performance of your portfolio in a snapshot. Overall, very satisfied with their service so far.</p>
              <h5 style={{color:'#D29537',marginTop:'3vh'}}>Archana Irivinti</h5>
              <h6 style={{color:'#9F9F9F',marginBottom:'8vh'}}>Senior Manager,Technology at ICICI</h6>
            </div>
            <div>
              <img src={userLogo} alt="userLogo Not found" />
              <p style={{marginRight:'5%',marginLeft:'5%',lineHeight:'2',color:'#9F9F9F'}}>As a novice investor, I had been contemplating whether [investing in] mutual funds was the right choice for me. When I came across Guardian Capital through a friend’s reference, the amount of investment guidance that I received from them, built my faith in investing in Mutual Funds.</p>
              <h5 style={{color:'#D29537',marginTop:'3vh'}}>Malika Kancherla</h5>
              <h6 style={{color:'#9F9F9F',marginBottom:'8vh'}}>Founder,Bodhi Valley Learning Academy</h6>
            </div>
            <div>
              <img src={userLogo} alt="UserLogo not found" />
              <p style={{marginRight:'5%',marginLeft:'5%',lineHeight:'2',color:'#9F9F9F'}}>” The service that <strong>Guardian Capital</strong>  team provides is fabulous. Financial planning is an absolute must for anyone who wants to take control of their finances for their children or for their retirement or anything for that matter. After meeting the financial advisor from Guardian Capital and got some financial education and guidance sessions from him on planning finances for my retirement and for my children’s education. I feel so confident and so much in control of my financial future. Their approach is very professional. I highly recommend Guardian Capital for anyone who is looking for financial planning, Investment and wealth management. I would NEVER, EVER consider hiring any other consultant for providing financial advice.”</p>
              <h5 style={{color:'#D29537',marginTop:'3vh'}}>Madhavi Adimulam</h5>
              <h6 style={{color:'#9F9F9F',marginBottom:'8vh'}}>Founder of Ananya Learning Centre,Hyderabad</h6>
            </div>
          </Carousel>
        </div>
      </div>

      <div>
        <table className={classes.tab1}>
          <thead>
            <tr>
              <th>At the Begining of the month</th>
              <th>Received during the month</th>
              <th>Resolved during the month</th>
              <th>Pending at the end of the month</th>
              <th>Reason for pendency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h6 style={{color:'rgb(135,116,139)',float:'left',position:'absolute'}}>*Displaying SEBI registered complaints as per latest SEBI guideline</h6>
      </div>
      <div><h6 style={{color:'rgb(135,116,139)',float:'left',marginTop:'35px',marginLeft:'5px'}}>Complaints Data Detail</h6></div>
      <div><h6 style={{marginTop:'75px',marginRight:'80px',color:'rgb(135,116,139)'}}>Disclosure with respect to compliance with Annual compliance audit requirement under Regulation 19(3) of SECURITIES AND EXCHANGE BOARD OF INDIA (INVESTMENT ADVISERS) REGULATIONS, 2013 for last and current financial year are as under :</h6></div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Financial Year</th>
              <th>Compliance Audit Status</th>
              <th>Remarks, if any</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>FY 2020-21</td>
              <td>Conducted/Not Conducted</td>
              <td>Complied</td>
            </tr>
            <tr>
              <td>2</td>
              <td>FY 2021-222</td>
              <td>Conducted/Not Conducted</td>
              <td>In Process,as due date is <br /> 30 September 2022</td>
            </tr>
          </tbody>
        </table>
       </div>
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
