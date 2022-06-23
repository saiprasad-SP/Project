import React from 'react'
import ReactPlayer from 'react-player'
import Post2img1 from '../Img/Post2img1.jpg'

const Post2 = () => {
  return (
  <div>
    <div className="container" style={{padding:'50px',color:'3A3A3A', fontFamily:'sans-serif' ,textAlign:'center'}}>
    <h1 class="font-size"> Guardian Capital: What to expect from<br/>Your investments -- going forward?</h1>
        </div>
        <div className="container" style={{color:'#A9ADB1',padding:'30px'}}><i class="bi bi-watch"></i>  March 22,2022 <i class="bi bi-chat"></i> 0 <i class="bi bi-person">By gcia</i></div>
        <div className="container">
        <img src={Post2img1} class="image_resize" alt="..."/>
        </div>
        <div className="container">
        <ReactPlayer  controls url='https://www.youtube.com/watch?v=7LN0RxMrs1c' style={{marginTop:'20px',marginLeft:'0px',marginBottom:'10px',opacity:'0.8'}} />
      </div>
        </div>
  )
}

export default Post2