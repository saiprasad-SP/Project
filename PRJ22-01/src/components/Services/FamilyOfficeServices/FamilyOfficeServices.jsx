import React from 'react';
import img1 from '../../Img/Services_img/family-office-services.jpg';
import './FamilyOfficeServices.css'
import {Container} from 'react-bootstrap' 

class FamilyOfficeServices extends React.Component {
    render() {
    return ( 
        <Container className="container">
            <h2 className="service_title">Family Office Services</h2>
            <ul className="service_text">
            <li className="list1">Comprehensive, highly customized financial plan</li>
            <li>Wealth management and asset allocation portfolio monitoring</li>
            </ul>
            <img className="service_image" src={img1}  alt="..."/>
            <p className="image_text">There are multiple teams working with the Certified <span className="p-span"><a className="a-style" href="/financial-planning-services/">Financial Planner</a></span> for managing each client's portfolio, ensuring every single individual working on clients portfolio is an expert, thus giving best possible recommendations and <span className="p-span"><a className="a-style" href="/services">service</a> </span> for each client. </p>
        </Container>
    )
    }
}

export default FamilyOfficeServices;