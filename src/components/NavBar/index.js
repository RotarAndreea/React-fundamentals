import React from 'react'
import Home from "../../pages/Home"
import MemeGenerator from '../../pages/MemeGenerator';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./style.css"
import Applications from '../../pages/Applications';
import Exercise from "../../pages/Exercises"
import Form from "../../pages/Form"
import Exercise2 from '../../pages/Exercise2';
import Challenge1 from '../../pages/Challenge1';

export default function NavBar() {
  return (
    <Router>
      <div className='nav'>
        <div className='nav-items'>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/MemeGenerator">MemeGenerator</Link>
            <Link className='link' to="/Applications">Applications</Link>
            <Link className='link' to="/Exercise">Exercise</Link>
            <Link className='link' to="/Form">Form</Link>
            <Link className='link' to="/Exercise2">Exercise2</Link>
            <Link className='link' to="/Challenge1">Challenge1</Link>
          </div>
          <div>
            <ul className='nav-items'>
              <li>acasa</li>
              <li>contact</li>
              <li>harta</li>
            </ul>
          </div>
      </div>
      
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/MemeGenerator" element={<MemeGenerator/>}/>
          <Route path="/Applications" element={<Applications/>}/>
          <Route path="/Exercise" element={<Exercise/>}/>
          <Route path="/Form" element={<Form/>}/>
          <Route path="/Exercise2" element={<Exercise2/>}/>
          <Route path="/Challenge1" element={<Challenge1/>}/>
        </Routes>
    </Router>
  )
}

