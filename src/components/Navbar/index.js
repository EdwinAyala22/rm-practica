import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Imagen from '../../img/rm-logo.png';

export const NavbarApp = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="p-1">
    <Navbar.Brand href="/" className="d-flex m-auto">
        <img
            src={Imagen}
            width="80"
            height="80"
            className="navLogo ms-3 mx-3"
            alt="rickAndMorty"
        /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Link className='nav-link' to="/">Inicio</Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>
  )
}