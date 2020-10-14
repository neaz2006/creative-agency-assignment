import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <div>
            <Container className="top-header">
                <Navbar expand="lg">
                    <Navbar.Brand href="#home"  className=' logo'><img className="logo" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#OurProtfolio">Our Protfolio</Nav.Link>
                            <Nav.Link href="#OurTeam">Our Team</Nav.Link>
                            <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
                            <Nav.Link  className="menu btn btn-dark text-white"  href="#Login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>


        </div>
    );
};

export default NavigationBar;