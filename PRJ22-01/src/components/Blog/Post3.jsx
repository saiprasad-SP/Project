import React from 'react'
import Post3img1 from '../Img/Post3img1.jpg'
import Post3img2 from '../Img/Post3img2.jpg'

function Post3() {
  return (
    <div>
         <div className="container" style={{padding:'50px',color:'3A3A3A', fontFamily:'sans-serif' ,textAlign:'center',}}>
    <h1 class="font-size">5 Questions to Ask Your Wealth Manager </h1>
        </div>
        <div style={{padding:'30px'}}></div>
        <div className="container" style={{color:'#A9ADB1'}}><i class="bi bi-watch"></i>  August 17,2021 <i class="bi bi-chat"></i> 0 <i class="bi bi-person">By Janakiram Kumar</i></div>
        <div className="container"  style={{padding:'35px',color:'#717477',marginLeft:'15%'}}>
            <p>A wealth manager/advisor helps in structuring the products based on the client’s needs,<br/>
             the products range from Investments, Insurance, Real Estate, Pension etc. A wealth <br/>
             manager also helps in optimization of taxes, creation of wills and trusts etc – this helps<br/>
              the client achieve life goals. It also keeps the client financially protected from <br/>
              unforeseen events. A solid wealth management relationship should ideally last you a<br/>
               lifetime, so choosing the right wealth manager is very important.</p>
        </div>
        <div className="container" style={{marginLeft:'22%'}}>
      <img src={Post3img1} class="image_resize" alt="..."/>
      </div>
      <div className="container" style={{padding:'30px',color:'#717477'}}>
        <p>Below are some questions need to ask your wealth manager,</p>
      </div>
      <div className="container" style={{padding:'0px',color:'#717477',marginLeft:'17%'}}>
        <p>1. How are you going to change my life?</p>
      
        <p>A good wealth manager creates a life plan which helps you achieve goals, while keeping<br/>
         your lifestyle stable. The planner creates a plan based on your present position, cash<br/>
         flows, lifestyle, risk management, net worth etc. and recommends suggestions or<br/>
          improvements to achieve all the goals.</p>

        <p>2. Are the assumption made in your financial plan realistic?</p>

        <p>Financial plans are created with a lot of assumptions like inflation, returns, life<br/>
         expectancy, cost estimates to the goals etc. An unrealistic or wrong assumption will lead <br/>
         to mismatch in the cash flows and may affect the goals.</p>

         <p>3. Suitability of the products</p>

         <p>A wealth manager short lists the products based on the risk appetite and duration of <br/>
         goals. It is important that the wealth manager maintain consistency in returns – well <br/>
         diversified across products with proper research methodology.</p>

         <p>A wealth manager who is chasing returns or showing abnormal historical performance is<br/>
          to be observed, because it is impossible to generate higher returns continuously and <br/>
          keep note that higher the risk higher the returns</p>

          <p>4. standards, qualification, experience and team of the wealth manager</p>

          <p> Higher standards provide a better quality of service than anything else out there. You<br/>
           must make sure that the quality of service you get is something that cannot be found<br/>
            anywhere else, at any price.</p>

            <p>A wealth manager is to be well qualified with a certificate like Certified Financial Planner<br/>
             or Investment Advisor. Experience helps to understand the client better and he can<br/>
            generate more solutions. Financial plan involves a lot of factors like investment products,<br/>
            insurance products, loans, real estate, wills and trusts etc., a single planner can’t be<br/>
             perfect in all the products so it is important to have a team behind the advisor.</p>

             <p>5. Fee</p>
             <div className="container" style={{marginLeft:'2%', padding:'50px'}}>
      <img src={Post3img2} class="image_resize" alt="..."/>
      </div>

      <p >It is important to understand and discuss various fees charged to you. Most of the<br/>
       wealth managers charge hidden fees like upfront fee from the products, double charge<br/>
        of the fee from you and the product manufactures, higher execution costs etc.</p>

        <p > Over-change of fees impacts your return hugely over a long term period.</p>
      </div>
    </div>
  )
}

export default Post3;