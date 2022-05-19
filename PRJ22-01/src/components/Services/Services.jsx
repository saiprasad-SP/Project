import React from 'react';
// import video from './../Video/gcia.mp4';
import img1 from './../Img/Services_img/family-3-370x208.png';
import img2 from './../Img/Services_img/finanace-planning-1-370x208.png';
import img3 from './../Img/Services_img/hni-wealth-management-india-370x208.jpg';
import img4 from './../Img/Services_img/estate-planning-1-350x208.png';
import img5 from './../Img/Services_img/real-estate-350x208.png';
import img6 from './../Img/Services_img/insurance-2-350x208.png';
import img7 from './../Img/Services_img/estate-successory-advisory-1-370x208.jpg';
import classes from './Services.module.css';
export default function Services() {
  return (
    <div>
      {/* <div className='cont1'>
        <Player
        playsInline
        poster="/assets/poster.png"
        src={video}
        style={{width:"20%"}}/>
      </div> */}
      <div className={classes.cont2} style={{border:''}}>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.col}>
              <img src={img1} alt="Not Found" />
            </div>
            <div className={classes.col}>
            <img src={img2} alt="Not Found" />
            </div>
            <div className={classes.col}>
            <img src={img3} alt="Not Found" />
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.col}>
            <img src={img4} alt="Not Found" />
            </div>
            <div className={classes.col}>
            <img src={img5} alt="Not Found" />
            </div>
            <div className={classes.col}>
            <img src={img6} alt="Not Found" />
            </div>
            <div className={classes.col}>
            <img src={img7} alt="Not Found" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
