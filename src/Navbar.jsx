import React from 'react';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
        <nav className='navbar navbar-expand-lg bg-dark text-light fw-bold text-center'>
            <NavLink className="navbar-brand">
                <h2 className='text-warning fw-bold'>CURD App</h2>
            </NavLink>

            <ul className='navbar-nav'>
                <li className='nav-item'><NavLink className="nav-link text-light fw-bold" to="/">Home</NavLink></li>
                <li className='nav-item'><NavLink className="nav-link text-light fw-bold" to="/Studdata">StudData</NavLink></li>
            </ul>
        </nav>
    </>
  )
}
