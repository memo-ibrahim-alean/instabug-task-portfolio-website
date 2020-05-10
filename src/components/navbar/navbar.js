import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="light" variant="light">
      <Link to='/' className='logo'>M.Ibrahim</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to='/projects' className='nav-link'>Projects</Link>
          <Link to='/skills' className='nav-link'>Skills</Link>
          <Link to='/about' className='nav-link'>About</Link>
          <Link to='/contact' className='nav-link'>Contact</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)


export default NavBar;
