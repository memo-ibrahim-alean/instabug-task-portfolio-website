import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.css';

const NavBar = () => (
  <Navbar className='shadow bg-white rounded' collapseOnSelect sticky="top" expand="lg" bg="light" variant="light">
    <Link to='/#header' className='logo'>M.Ibrahim</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
        <Link to='/#projectSection' className='nav-link mr-3`'>Projects</Link>
        <Link to='/#skillsSection' className='nav-link mr-3'>Skills</Link>
        <Link to='/#aboutSection' className='nav-link mr-3'>About</Link>
        <Link to='/#contactSection' className='nav-link mr-3'>Contact</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)


export default NavBar;
