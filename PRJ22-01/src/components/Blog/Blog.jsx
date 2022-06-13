import React from 'react'
import Blog1 from '../Img/Blog1.jpg'
import Blog2 from '../Img/Blog2.jpg'
import Blog3 from '../Img/Blog3.jpg'
import Blog5 from '../Img/Blog5.jpg'
import Blog6 from '../Img/Blog6.jpg'
import Blog7 from '../Img/Blog7.jpg'
import Blog8 from '../Img/Blog8.jpg'
import Blog9 from '../Img/Blog9.jpg'
import Blog10 from '../Img/Blog10.jpg'


export default function Blog() {
  return (
   <div>
     <h1 className="main-heading text-center">All Posts</h1>
     <section className="section border-top">
    <div className="container">
        <div className="row">
            <div className="col-md-12 mb-4text-center">
                 
                 <div className="underline mx-auto"></div>
            </div>


             <div className="col-md-4">
                 <div className="card shadow">
                     <img src={Blog1} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <h6 >CLIENTS EDUCATION</h6>
                        <div className="underline"></div>
                    <a href="https://www.gcia.in/why-investment-decision-based-on-large-cap-mid-cap-and-small-cap-is-flawed/" rel="bookmark"><h4>Why Investment Decision based on Large Cap, Mid Cap and Small Cap is flawed</h4></a>
                     </div>
                     </div>
                     </div>


                  <div className="col-md-4">
                 <div className="card shadow">
                <img src={Blog2} className="w-100 border-bottom" alt="Blog"/>
                <div className="card-body">
                <h6 >CLIENTS EDUCATION</h6>
                 <div className="underline"></div>
                <h4>
                Guardian Capital: What to ex-<br/>
                pect from your investments -<br/>
                going forward?
                </h4> 
                </div>
                </div>
                </div>


                  <div className="col-md-4">
                 <div className="card shadow">
                     <img src={Blog3} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <h6 >FINANCIAL CONSULTING</h6>
                        <div className="underline"></div>
                        <h4>
                        5 Questoins to Ask Your<br/>
                        Wealth Manager
                         </h4>
                     </div>
                     </div>
                     </div>


                     <div className="col-md-4">
                 <div className="card shadow">
                 <img src={Blog10} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <h6 >SMART INVESTING</h6>
                        <div className="underline"></div>
                        <h4>
                        Should one run after<br/>
                        "RETURNS" or Save more..<br/>
                        What's important?
                         </h4>
                     </div>
                     </div>
                     </div>

                     <div className="col-md-4">
                 <div className="card shadow">
                     <img src={Blog5} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <h6 >GUARDIAN</h6>
                        <div className="underline"></div>
                        <h4>
                        Basic Insurances to be in place <br/>
                        for every individual
                         </h4>
                     </div>
                     </div>
                     </div>



                     <div className="col-md-4">
                 <div className="card shadow">
                     <img src={Blog6} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <h6 >UNCATEGORIZED</h6>
                        <div className="underline"></div>
                        <h4>
                        Should You Invest in Small<br/>
                        Cap Funds?
                         </h4>
                     </div>
                     </div>
                     </div>



                     <div className="col-md-4">
                 <div className="card shadow">
                     <img src={Blog7} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <h6 >GUARDIAN</h6>
                        <div className="underline"></div>
                        <h4>
                        Work from Home, Version 2.0:<br/>
                        Guess Who's Back...Back<br/>
                        Again...
                         </h4>
                     </div>
                     </div>
                     </div>



                     <div className="col-md-4">
                 <div className="card shadow">
                     <img src={Blog8} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <h6 >UNCATEGORIZED</h6>
                        <div className="underline"></div>
                        <h4>
                        High PE - valuations? How<br/>
                        does it affect if valuations<br/>
                        correct?
                         </h4>
                     </div>
                     </div>
                     </div>


                     <div className="col-md-4">
                 <div className="card shadow">
                     <img src={Blog9} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <h6 >UNCATEGORIZED</h6>
                        <div className="underline"></div>
                        <h4>
                        Union Budget Highlights-<br/>
                        2021
                         </h4>
                     </div>
                     </div>
                     </div>

        </div>
    </div>
</section>

 {/* pagiantion - bootstrap */}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
    <a class="page-link" href="http://localhost:3000/blog" tabindex="-1"><i class="bi bi-arrow-left"></i></a>
    </li>
    <li class="page-item"><a class="page-link" href="http://localhost:3000/blog">1</a></li>
    <li class="page-item"><a class="page-link" href="">2</a></li>
    <li class="page-item"><a class="page-link" href="">3</a></li>
    <li class="page-item">
    <a class="page-link" href="http://localhost:3000/careers"><i class="bi bi-arrow-right"></i></a>
    
    </li>
  </ul>
</nav>
   </div>
  )
}
