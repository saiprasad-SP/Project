import React from 'react';
import './FinancialPlanningServices.css'
import {Container , Row, Col} from 'react-bootstrap'  

class FinancialPlanningServices extends React.Component {
    render() {
    return ( 
        <Container>
            <h1 className="service-title"> Financial Planning Services </h1>
            <Row className="col-spacing1">
                <Col md="11" lg="4" className="education row-spacing">
                    <h4 className="service-titles">Education</h4>
                            <ul className="unordered-list">
                                <li> <span className="list-span">
                        <a href="/education">Education</a></span></li>
                                <li>Investing options</li>
                                <li>Sample Profit & Loss Account</li>
                                <li>Sensex EPS Vs Price Analysis</li>
                            </ul>
                </Col>
                 <Col md="11"  lg="4" className="overview">
                        <h4 className="service-titles">Overview of Current Position</h4>
                        <ul className="unordered-list">
                            <li>Analysis of current investments</li>
                            <li>Balance Sheets</li>
                            <li><span className="list-span">
                        <a href="/insurance-advisory">Income Statements</a></span></li>
                        </ul>
                </Col>
            </Row><br/>
            <Row  className="financialplan">
                    <h4 className="service-titles"><span className="list-span">
                        <a href="/financial-planning-services">Financial Plan</a></span> Preparation and Presentation</h4>
                    <ul className="unordered-list">
                        <li>Creation of the financial plan</li>
                        <li>Assumptions</li>
                        <li>Options Available</li>
                        <li>Compounding Effect on Goals</li>
                        <li>Necessary calculations</li>
                    </ul>
            </Row><br/>
            <Row className="col-spacing2">
                <Col md="2" lg="4" className="portfolio-service">
                    <h4 className="service-titles">Portfolio Allocation</h4>
                    <ul className="unordered-list">
                        <li>Current Asset Allocation</li>
                        <li>Restructuring Portfolio</li>
                        <li>Restructuring <span className="list-span">
                        <a href="/accounting-and-taxation-advisory">Tax Strategy</a></span></li>
                    </ul>
                </Col>
                <Col md="2" lg="4" className="strategy">
                    <h4 className="service-titles">Strategy Execution and 12 Month Plan</h4>
                    <ul className="unordered-list">
                        <li style={{lineHeight:1.6}}>Once approved- <span className="list-span">
                            <a href="/financial-planning-services">plan executed
                            </a></span>,
                          investments executed
                        </li>
                        <li>12 Month Action Plan</li>
                    </ul>
                </Col>
            </Row><br/>
        <Row className="research">
            <h4 className="service-titles">Research and Review</h4>
            <ul className="unordered-list">
                <li>Retirement Model</li>
                <li>Equity Allocation</li>
                <li>Debt Allocation</li>
                <li>Scheduled reviews</li>
                <li>Education</li>
            </ul>
         </Row> 
        </Container>
    )
    }
}
export default FinancialPlanningServices;