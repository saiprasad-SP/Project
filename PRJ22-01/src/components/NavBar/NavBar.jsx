import React from 'react';
import { GrSend } from 'react-icons/gr';
import logo from './../Img/main_logo-1.png';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Services from '../Services/Services';
import Blog from '../Blog/Blog';
import Contacts from '../Contact/Contact';
import Careers from '../Careers/Careers';
import Education from '../Education/Education';

export default function NavBar() {
  return (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"> <img src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">ABOUT US</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/services">SERVICES</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">BLOG</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacts">CONTACT US</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/careers">CAREERS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/education">EDUCATION</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add"><i class="bi bi-three-dots-vertical"></i></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add"><button>GET IN TOUCH <GrSend/></button></Link>
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
