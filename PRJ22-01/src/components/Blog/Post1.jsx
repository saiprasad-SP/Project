import React from 'react'
import ReactPlayer from 'react-player'
import Post1img1 from '../Img/Post1img1.jpg'
import post1 from '../Blog/Post1.css'

export const Post1 = () => {
  return (
    <div>

    <div className="container" style={{padding:'50px',color:'3A3A3A', fontFamily:'sans-serif' ,textAlign:'center'}}>
    <h1 class="font-size"> Why Investment Decision based on Large <br/>Cap, Mid Cap and Small Cap is flawed </h1>
        </div>
        <div className="container" style={{color:'#A9ADB1'}}><i class="bi bi-watch"></i>  March 22,2022 <i class="bi bi-chat"></i>   0 <i class="bi bi-person">By gcia</i></div>
 <div className="container">
        <ReactPlayer  controls url='https://www.youtube.com/watch?v=nHVnGnXMIeA' style={{marginTop:'20px',marginLeft:'0px',marginBottom:'10px',opacity:'0.8'}} />
      </div>
      <div className="container">
      <img src={Post1img1} class="image_resize" alt="..."/>
      </div>

        </div>
  )
}
export default Post1;