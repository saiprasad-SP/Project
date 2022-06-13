import React from 'react'
import Website from '../Img/Website-content-education.jpg'
import Wbsite2 from '../Img/Website-content-education-1.jpg'
import Ak from '../Img/ak.jpg'
import Chart1 from '../Img/Chart-1.jpg'
import Chart2 from '../Img/Chart-2.jpg'
import './Education.css'
import Bond from '../Img/gcia-graphs-2.jpg'
import Bond2 from '../Img/chart-3-gcia.jpg'
import Real from '../Img/Capture-3.jpg'
import Real2 from '../Img/education-real-estate.jpg'
import Real3 from '../Img/GCIA-New-Chart-2.jpg'

export default function Education() {
  return (
    <div>
    <h2 className="main-heading text-center">Financial Life Cycle</h2>
     <img src={Website} class="d-block w-70 center" alt="..."/>
     <img src={Wbsite2} class="b-block w-10 center" alt="..."/>
     <h5 className="main-heading1 text-center" >It's important to answer the below questions because of your financial life cycle</h5>
     
       <div>
       <div className="child_container" style={{marginLeft:'1%',padding:'50px'}}>
     <div className="line_spark"></div>
     <div>
       
       <div className="container" >
          <div className="row">
            <div className="col" style={{textAlign:'center'}}>
              <h5>Retirement/Goals</h5>
              <p>How much do I need to save?<br/>
              When do I need to save?<br/>
              What will my living standard be?<br/>
              How can I change my situation
              </p>
            </div>


            <div className="col" style={{textAlign:'center'}}>
            <h5>Investments</h5>
            <p>How much do I need to invest?<br/>
            When should I invest?<br/>
            where shoukd I invest?<br/>
            What should I expect out of my<br/>
            investments?
            </p>
            </div>



            <div className="col" style={{textAlign:'center'}}>
            <h5>Insurance/Risk</h5>
            <p>Why do I need to invest?<br/>
            What type do I need?<br/>
            How much do I need?<br/>
            When should I get insurance?


            </p>
            </div>
        
          </div>
       </div>
     </div>
    </div>
</div>

<p className="style">The 35 years of income generated has to provide for the 30 years of retiremenrt (keeping inflation in mind) !</p>

     <h2 className="Education2 text-center">Education: Investment Options</h2>
     <img src={Ak} class="d-block w-70 center" alt="..."/>



     <h2 className="Education2 text-center" style={{marginLeft:'0%',padding:'50px'}}>Education: Equity</h2>
     
     <div class="container" >
     <p className="text-center"><b>Equity Definition</b> : Equity is the amount of funds invested in a business by its owners. Simply put, equity is ownership in a company.</p> 
     <hr></hr>
     <img src={Chart1}  alt="..."/>
     <div class="text2">
     <p className="container"> The stock market is subject to short-term<br/>
       fluctuation. But over the long term, the <br/>stock market has historically 
       performed<br/>well.
       </p>

       <p className="container">And over the short to medium term , the <br/>returns from equities tend
           to be volatile.<br/> However, over the long term they become<br/>surprisingly
           predictable
       </p>
     </div>
     </div>
     <div class="container"><img src={Chart2}  alt="..."/></div>
    
     

       <div className="container" >
         <h3 className="text-center" style={{marginLeft:'0%',padding:'50px'}}>Education : Bonds</h3>
         <p>A Government Security (G-sec) is a tradable instrument issued by the Central Government or the State Governments.
            It acknowledges the Government's debt obligation. Such securities are short term (usually called treasury bills, 
            with original maturities of less than one year) or long term (usually called Government bonds or dated securities
            with original maturity of one year or more). G-secs carry practically no risk of default and, hence, are called 
            risk-free gilt-edged instruments.
         </p>
       </div> 
       <div class="container">
       <img src={Bond}  alt="..."/>
       <div class="text1">
          <p>yields in G bonds are also volatile based<br/> on economic scenario, it linked with<br/> Inflation</p> 
          <p>In recent years inflation is in downward<br/> trend, so bond yields are also likely to<br/> follow.</p>
       </div>
       <img src={Bond2}  alt="..."/>
        
       </div>


      <div>
       <p className="container"><b>Tax</b> : Short gains (less than 3 years) are added to income and texted at applicable 
       tax rates, where as long term gains(more than 3 years) are taxed at 20% with indexation benefit and 10% without indexation benefit.</p> 
       </div>
    
       <h2 className="Education2 text-center" style={{marginLeft:'0%',padding:'50px'}}>Education: Real Estate</h2>
       <p className="container"> Residex is a housing price index updated quarterly by National Housing Bank (NBH). NBH, the Apex level housing finance
         institution wholly owned by Reserve Bank of India (RBI), regulates activities of housing finance companies (HFCs) in India.
       </p>
       <p className="container">NHB Residex tracks residential property prices in 26 cities with the <b>starting index value of 100 and 2007 as the base year</b>. Residex tracks prices over a period of time by dwelling size (small / medium / large) and location (city / zones / locations).</p>

       <img src={Real} class="d-block w-50 center" alt="..."/>
       <p className="text-center"><b>Tax</b> : Short term gains (less than 2 years) are texted at 20%,
       where as long term gains(more than 2 years) are taxed at 20% with indexation benefit.</p> 


      <div className="container" >
       <p style={{marginLeft:'0%',padding:'50px'}}> Residex is a housing price index updated quarterly by National Housing Bank (NBH). NBH, the Apex level housing finance
         institution wholly owned by Reserve Bank of India (RBI), regulates activities of housing finance companies (HFCs) in India.
       </p>
       <p  style={{marginLeft:'0%',padding:'0px'}}>NHB Residex tracks residential property prices in 26 cities with the <b>starting index value of 100 and 2007 as the base year</b>. Residex tracks prices over a period of time by dwelling size (small / medium / large) and location (city / zones / locations).</p>
       </div>

       <img src={Real2} class="d-block w-50 center" alt="..."/>
       <p className="text-center"><b>Tax</b> : Short term gains (less than 2 years) are texted at 20%,
       where as long term gains(more than 2 years) are taxed at 20% with indexation benefit.</p>
       
       <h2 className="Education2 text-center">Consolidated of all Securities</h2>
       <img src={Real3} class="d-block w-50 center" alt="..."/>
      
       
      

</div>
  )
}
