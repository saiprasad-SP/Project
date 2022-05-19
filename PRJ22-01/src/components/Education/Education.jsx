import React from 'react'
import Website from '../Img/Website-content-education.jpg'
import Wbsite2 from '../Img/Website-content-education-1.jpg'
import Ak from '../Img/ak.jpg'
import Chart1 from '../Img/Chart-1.jpg'
import Chart2 from '../Img/Chart-2.jpg'
import './Education.css'

export default function Education() {
  return (
    <div>
    <h2 className="main-heading text-center">Financial Life Cycle</h2>
     <img src={Website} class="d-block w-70 center" alt="..."/>
     <img src={Wbsite2} class="b-block w-10 center" alt="..."/>
     <h5 className="main-heading1 text-center" >It's important to answer the below questions because of your financial life cycle</h5>
     <ul>
<li>How much do I need to save?</li>
<li>When do I need to save?</li>
<li>What will my living standard be?</li>
<li>How can I change my situation?</li>
</ul>

<p className="style">The 35 years of income generated has to provide for the 30 years of retiremenrt (keeping inflation in mind) !</p>

     <h2 className="Education2 text-center">Education: Investment Options</h2>
     <img src={Ak} class="d-block w-70 center" alt="..."/>



     <h2 className="Education2 text-center">Education: Equity</h2>
     <p className="text-center"><b>Equity Definition</b> : Equity is the amount of funds invested in a business by its owners. Simply put, equity is ownership in a company.</p> 
     <hr></hr>
     <img src={Chart1} class="b-block w-50" alt="..."/>
     <img src={Chart2} class="b-block w-50" alt="..."/>
     <div>
     <p> The stock market is subject to short-term
       fluctuation. But over the long term, the stock market has historically 
       performed
       </p>
       <p>And over the short to medium term , the returns from equities tend
           to be volatile. However, over the long term they become surprisingly
           predictable
       </p>
       </div>

       <div>
         <h3 className="text-center">Education : Bonds</h3>
         <p>A Government Security (G-sec) is a tradable instrument issued by the Central Government or the State Governments.
            It acknowledges the Government's debt obligation. Such securities are short term (usually called treasury bills, 
            with original maturities of less than one year) or long term (usually called Government bonds or dated securities
            with original maturity of one year or more). G-secs carry practically no risk of default and, hence, are called 
            risk-free gilt-edged instruments.
         </p>
       </div>

    
    
</div>
  )
}
