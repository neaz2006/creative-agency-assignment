import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <div>
            <Container className="top-header">
                <Navbar>
                    <Link to="/" className=' logo'><img className="logo" src={logo} alt="" /></Link>
                    <Nav className="ml-auto">
                        <Navbar.Collapse  activeKey="/home">
                            <Nav.Item >
                                <Link className="menu" to="/home">Home</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="menu" to="/OurProtfolio">Our Protfolio</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="menu" to="/OurTeam">Our Team</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="menu" to="/ContactUs">Contact Us</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="menu btn btn-dark text-white" to="/Login">Login</Link>
                            </Nav.Item>
                        </Navbar.Collapse>
                    </Nav>
                </Navbar>
            </Container>


        </div>
    );
};

export default NavigationBar;