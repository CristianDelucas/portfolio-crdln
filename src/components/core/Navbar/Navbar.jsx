import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import '../../../App.scss';
import HomePage from '../../pages/HomePage/HomePage';
import ResumePage from '../../pages/ResumePage/ResumePage';

const Navbar = () => {
    return (
        
            <BrowserRouter>
                <navbar className="c-navbar">
                    <Link to='/'>Home</Link>
                    <Link to='/#web'>Web</Link>
                    <Link to='/#games'>Juegos</Link>
                    <Link to='/#about'>About</Link>
                    <Link to='/resume'>Resume</Link>
                </navbar>
            
            <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/resume' element={<ResumePage/>}/>
            </Routes>
            </BrowserRouter>
        
    )
}

export default Navbar
