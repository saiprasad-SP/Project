import React from 'react';
import './RealestateAdvisory.css'

class RealestateAdvisory extends React.Component {
    render() {
    return ( 
        <div className="container">
            <h1 className="service-title"> Real Estate Advisory </h1>
           <div className="div1">
            <p>Most people don't understand how 
            <span className="paragraph-span">
                <a href="/real-estate-advisory"> real estate works.</a></span>They feel that land is a secure investment
                --something tangible they can see and <br></br>touch.
            </p>
            <p className="paragraph2">
                At  <span className="paragraph-span">
                <a href="/">Guardian</a></span>,we'll help you understand the true value of your assets, and we advise you accordingly.How much does property value <br></br>actually 
                increase over time? How much rent will you receive in a 10 year period? what is the opportunity cost of the money
                that you <br></br>have invested in real estate? And so on.
            </p>
            <p>
                Furthermore, we partner with reputed,well established,real estate firms to help our clients buy,
                sell,or rent out their properties.
            </p>
            <p>
                Please visit our 'education' page for a better understanding of investing in <span className="paragraph-span">
                <a href="/education" target='_blank'>Real Estate</a> </span>
            </p>
            </div>
        </div>
    )
    }
}

export default RealestateAdvisory;