import React from 'react';
import {Zoom} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'  
import logo1 from './../Img/guardian-capital-investment-advisors-hyderabad.jpg';
import logo2 from './../Img/guardian-capital-investment-advisors-india.jpg';
import logo3 from './../Img/gcia-wealth-management-services.jpg';
import logo4 from './../Img/secure-your-financial-future.jpg';
import logo5 from './../Img/guardian-capital-investments-advisors.png'
import classes from './Home.module.css';


const images = [logo1, logo2, logo3, logo4,logo5];

const zoomOutProperties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    // scale: 0.6,
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
        <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, perspiciatis rerum! Dolorum sint, rem voluptatum ex blanditiis qui maiores ipsum fugiat expedita placeat distinctio tempora dolore tempore, voluptas, non laudantium.
        </h1>
    </div>
  )
}
