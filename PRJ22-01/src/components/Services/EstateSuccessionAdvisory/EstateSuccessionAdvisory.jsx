import React from 'react';
import img1 from '../../Img/Services_img/gcia-inheritance-options.jpg';
import './EstateSuccessionAdvisory.css'
import {Container , Row, Col} from 'react-bootstrap'  

class EstateSuccessionAdvisory extends React.Component {
    render() {
    return ( 
        <Container>
            <h1 className="service-title"> Estate and Succession Advisory </h1><hr/>
            <p className="p1">We help you in deciding whether you require a will or a trust. We partner with the best<br/> companies
                and  <span className="p1-span">
                <a href="/family-office-services">lawyers</a></span> to make sure your legal requirements are met.
            </p>
        <Row>
            <img class="img1" src={img1}  alt="..."/>
            </Row>

        <Row>
            <Col>
            <ul>
                <li>A self written document to distribute assets.</li>
                <li>Goes into effect after death.</li>
                <li>Easiest form of inheritance document to be challenged in court.</li>
            </ul>
            </Col>
            <Col>
            <ul>
                <li>A professionally written document with no ambiguity.</li>
                <li>Goes into effect after death.</li>
            </ul>
            </Col>
            <Col>
            <ul>
                <li>An organization set-up to manage assets transferred in its name.</li>
                <li>Goes into effect before,at or after death.</li>
                <li>Expensive to maintain.</li>
            </ul>
            </Col>
            <Col>
            <ul>
                <li>An organization set-up to manage assets.</li>
                <li>A <span className="list-span">
                <a href="/family-office-services">family member</a></span> can be on the board and assets can be distributed over a period of time.</li>
                <li>Goes into effect after death.</li>
            </ul>
            </Col>
        </Row>
        </Container>
    )
    }
}

export default EstateSuccessionAdvisory;