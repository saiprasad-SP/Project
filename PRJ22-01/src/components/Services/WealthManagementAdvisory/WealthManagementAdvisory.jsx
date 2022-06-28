import React from 'react';
import {Container , Row, Col} from 'react-bootstrap'  
import img1 from '../../Img/Services_img/wealthmanagement/planningphase.jpg';
import img2 from '../../Img/Services_img/wealthmanagement/portfolio.jpg';
import img3 from '../../Img/Services_img/wealthmanagement/growth.jpg';
import img4 from '../../Img/Services_img/wealthmanagement/heart-rate.jpg';
import img5 from '../../Img/Services_img/wealthmanagement/review.jpg';
import './WealthManagementAdvisory.css'

class WealthManagementAdvisory extends React.Component {
    render() {
    return ( 
        <Container className="container">
            <h1 className="service-title"> Wealth Management Advisory </h1>
            <Row className="col1-division">
                <Col lg="3" className="planning">
                <img class="img1" src={img1}  alt='...' width="128" height="128"/>
                    <h4 className="planning-phase">Planning Phase</h4>
                    <p className="planning-desc">First things first,we believe in thoroughly understanding clients goals and needs-this includes a Review
                        and thorough analysis of the client's existing investments-- we create an investment plan as per our conclusions.
                    </p>
                </Col>
                <Col lg="3" className="portfolio">
                <img class="img2" src={img2}  alt="..."/>
                    <h4 className="portfolio-phase">Creating A Customized Portfolio</h4>
                    <p>Once the client agrees to our plan, we take on asset allocation-we create a
                        portfolio that's in alignment with the client's goals and values.
                    </p>
                </Col>
            </Row><br/>
            <Row >
                <Col lg="3" className="investment">
                <img class="img3" src={img3}  alt="..."/>
                    <h4 className="investment-execution">Investment Execution</h4>
                    <p className="investment-desc">GCIA coordinates with your banker and sets up your investment accounts</p>
                </Col>
            </Row><br/>
            <Row className="col2-division">
                <Col lg="3" className="tracking">
                <img class="img4" src={img4}  alt="..."/>
                    <h4 className="tracking-phase">Tracking</h4>
                    <p className="tracking-desc">GCIA provides timely reports-as per client requirements. It's up to you whether you want a monthly report or whether you want a 
                        quarterly,even annual report. Your personal senior planner will explain any queries you have in person.
                        Furthermore,we also provide any taxation related documents, requirements-your personal planner can arrange a meeting 
                        with a specialized Chartered Accountant and/or other accounting related professionals.
                        Finances are complicated--and a highly personal matter.We believe in providing the best customer experience.
                        </p>
                </Col>
                <Col lg="3" className="review">
                <img class="img5" src={img5}  alt="..."/>
                    <h4 className="review-phase">Review</h4>
                <p className="review-desc">Life goals and circumstances change-and as such, we will reassess client goals on a regular basis
                    and make any changes required.Once again,our professionals are always available, at any moment, to
                    answer any queries.
                </p>
                </Col>
            </Row> 
    </Container>
    )
    }
}

export default WealthManagementAdvisory;