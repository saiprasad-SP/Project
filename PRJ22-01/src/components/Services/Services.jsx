import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import img1 from './../Img/Services_img/family-3-370x208.png';
import img2 from './../Img/Services_img/finanace-planning-1-370x208.png';
import img3 from './../Img/Services_img/hni-wealth-management-india-370x208.jpg';
import img4 from './../Img/Services_img/estate-planning-1-350x208.png';
import img5 from './../Img/Services_img/real-estate-350x208.png';
import img6 from './../Img/Services_img/insurance-2-350x208.png';
import img7 from './../Img/Services_img/estate-successory-advisory-1-370x208.jpg';
import video from './../Img/Services_img/gcia.mp4';
import './Services.module.css';
import {Container , Row, Col} from 'react-bootstrap'

export default function Services() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return ( 
    <Container>
      <div style={{marginLeft: '19%'}}>
      <video
          style={{ maxWidth: "75%", width: "800px", margin: "0 auto" }}
          playsInline
          loop
          muted
          controls
          FaPlayCircle
          alt="All the devices"
          src={video}
          ref={videoEl}
        />
      </div>
     <Row>
       <h1 className="service-title">Our Services</h1>
            <Col lg="4"style={{textAlign:'center'}}>
                <Link className="onClick" to="/family-office-services" rel="bookmark">
                  <img src={img1}  alt="..."/>
                  <h4 className="family-office">Family office Services</h4>
                </Link>
                  <p className="family-office-text">A comprehensive list of services<br/>
                  related to anything and everything<br/>
                    to do with your finances—we do it<br/>
                    all under one roof.
                  </p>
            </Col>

            <Col lg="4" style={{textAlign:'center'}}>
              <Link className="onClick" to="/financial-planning-services" rel="bookmark">
              <img src={img2}  alt="..."/>
              <h4 className="family-office">Financial Planning Services</h4>
              </Link>
              <p>We customize financial plans<br/>
                differently for each and every one<br/>
                  of our clients. We do everything <br/>
                  from goal-based financial planning,<br/>
                  pre-retirement financial planning,<br/>
                    to retirement, and post-retirement <br/>
                    financial planning.</p>
            </Col>

            <Col lg="4" style={{textAlign:'center'}}>
              <Link className="onClick" to="/wealth-management" rel="bookmark">
              <img src={img3}  alt="..."/>
              <h4>Wealth Management Advisory</h4></Link>
              <p> We manage your wealth in such a <br/>
              way to make your money work for<br/>
              you.</p>
            </Col>
      </Row>
      <Row>
          <Col style={{textAlign:'center'}}>
            <Link className="onClick" to="/legal-advisory" rel="bookmark">
            <img src={img4}  alt="..."  style={{width:'90%'}} />
            <h4>Estate and Succession Advisory</h4></Link>
            <p> We partner with some<br/>
              of the best legal firms to <br/>
              help make sure our clients have ironclad<br/>
              wills—we also advise on<br/>
              creating and <br/>
              maintaining trusts.</p>
          </Col>
           
          <Col style={{textAlign:'center'}}>
            <Link className="onClick" to="/real-estate-advisory" rel="bookmark">
            <img src={img5}  alt="..."  style={{width:'90%'}} />
            <h4>Real Estate Advisory</h4></Link>
            <p>We partner with<br/>
             reputable real estate <br/>
             firms to ensure our <br/>
             clients have all the help <br/>
             they need with their real <br/>
             estate needs and<br/> queries.</p>
          </Col>

          <Col style={{textAlign:'center'}}>
            <Link className="onClick" to="/insurance-advisory" rel="bookmark">
            <img src={img6}  alt="..." style={{width:'90%'}} />
            <h4>Insurance Advisory</h4></Link>
            <p>We help our clients <br/>
            choose the right kind of<br/> insurance as well as the <br/>right amount of <br/>insurance to keep their<br/> families protected.</p>
          </Col>

          <Col style={{textAlign:'center'}}>
            <Link className="onClick" to="/accounting-and-taxation-advisory" rel="bookmark">
            <img src={img7} alt="" style={{width:'90%'}} />
            <h4>Accounting and Taxation Advisory</h4></Link>
            <p>We have an in-house<br/>
             accounting division that <br/>
             takes care of all <br/>
             accounting needs so<br/>
              that our clients’ books<br/>
               are up to date, and their <br/>
               taxes properly filed.</p>
          </Col>
        </Row>
     </Container>
  )
}
