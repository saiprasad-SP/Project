import React from 'react';
import { GrSend } from 'react-icons/gr';
import logo from './../Img/main_logo-1.png';
import {BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Services from '../Services/Services';
import Blog from '../Blog/Blog';
import Contacts from '../Contact/Contact';
import Careers from '../Careers/Careers';
import Education from '../Education/Education';
import './NavBar.module.css'

export default function NavBar() {
  return (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid" >
                <NavLink className="navbar-brand" to="/"> <img src={logo} alt="Not Found" style={{marginLeft:'10%'}} /></NavLink>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item" style={{paddingLeft:'50px'}}>
                        <NavLink className="nav-link active" aria-current="page" to="/" exact activeStyle={{color:'#D29537'}}>HOME</NavLink>
                    </li>
                    <li className="nav-item" style={{paddingLeft:'50px'}}>
                        <NavLink className="nav-link" to="/about" exact activeStyle={{color:'#D29537'}}>ABOUT US</NavLink>
                    </li>
                    <li className="nav-item" style={{paddingLeft:'50px'}}>
                        <NavLink className="nav-link" to="/services" exact activeStyle={{color:'#D29537'}}>SERVICES</NavLink>
                    </li>
                    <li className="nav-item" style={{paddingLeft:'50px'}}>
                        <NavLink className="nav-link" to="/blog" exact activeStyle={{color:'#D29537'}}>BLOG</NavLink>
                    </li>
                    <li className="nav-item" style={{paddingLeft:'50px'}}>
                        <NavLink className="nav-link" to="/contacts" exact activeStyle={{color:'#D29537'}}>CONTACT US</NavLink>
                    </li>
                    <li className="nav-item" style={{paddingLeft:'50px'}}>
                        <NavLink className="nav-link" to="/careers" exact activeStyle={{color:'#D29537'}}>CAREERS</NavLink>
                    </li>
                    <li className="nav-item" style={{paddingLeft:'50px'}}>
                        <NavLink className="nav-link" to="/education" exact activeStyle={{color:'#D29537'}}>EDUCATION</NavLink>
                    </li>
                    {/* three dots has been removed and it has to be added when the page is responsive */}
                    <li className="nav-item" style={{marginLeft:'400px'}}>
                        <NavLink className="nav-link" to="/add" exact activeStyle={{color:'#D29537'}}><button>GET IN TOUCH <GrSend style={{color:'white'}}/></button></NavLink>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/careers' element={<Careers/>}/>
            <Route path='/education' element={<Education/>}/>
        </Routes>
  </Router>
  );
}
