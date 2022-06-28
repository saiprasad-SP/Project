import React from 'react';
import img1 from '../../Img/Services_img/InsuranceAdvisory/yuio1.jpg';
import img2 from '../../Img/Services_img/InsuranceAdvisory/home.jpg';
import img3 from '../../Img/Services_img/InsuranceAdvisory/health.jpg';
import img4 from '../../Img/Services_img/InsuranceAdvisory/life.jpg';
import {Container , Row, Col} from 'react-bootstrap'  
import './InsuranceAdvisory.css'

class InsuranceAdvisory extends React.Component {
    render() {
    return ( 
        <Container className="container">
            <h1 className="service-title"> Insurance Advisory </h1>
            <img className="img1" src={img1}  alt="..."/>
            <p className="p-text"> We keep your <span class="p-span"><a href="/wealth-management"> family protected </a></span> by making sure you have the right kind and right amount of insurance
            </p>
        <hr/>
        <Row>
            <Col lg="2">
            <img className="img2" src={img2}  alt="..."/>
            </Col>
            <Col lg="4">
            <p className="p-text"><b>Home insurance:</b>
             <span>
                <a href="/insurance-advisory"> Home insurance </a></span>  protects your family from various unforeseen circumstances such as fire, burglary, terrorism acts, and natural disasters.
            </p>
            </Col>
            <Col lg="2">
            <img className="img3" src={img3}  alt="..."/>
            </Col>
            <Col lg="4">
            <p className="p-text"><b>Health Insurance:</b> There are many types of <span>
                <a href="/wealth-management"> health insurance</a></span> plans you can take for yourself and your <span style={{color:'#003300'}}>
                <a href="/family-office-services"> family</a></span> to ensure protection against incurring sudden medical expenses.
            </p>
            </Col>
        </Row>
        <Row>
            <Col lg="2">
                <img className="img4" src={img4}  alt="..."/>
            </Col>
            <Col lg="4">
            <p className="p-text"><b>Whole   <span className="p-span"><a href="/insurance-advisory">Life Insurance</a></span>:</b> Pay a premium throughout one's life and receive compensation at the time of death</p>
            </Col>
            <Col lg="2">
                <img className="img4" src={img4}  alt="..."/>
            </Col>
            <Col lg="4">
            <p className="p-text"><b>Term Insurance: </b>
                The policy holder(earning member of the family)pays  <span className='p-span'><a href="/terms-conditions"> regular premiums</a></span> until his or her death upon which the corpus is paid to the family.</p>
            </Col>
        </Row>
        </Container>
    )
    }
}

export default InsuranceAdvisory;