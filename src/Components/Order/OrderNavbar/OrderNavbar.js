import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

const OrderNavbar = () => {
    return (
            <Container className="top-header">
                <Navbar expand="lg">
                    <Navbar.Brand to="home"  className='logo mr-5'><Link className="menu btn " to="/"><img className="logo" src={logo} alt="" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Link className="menu ml-5"><h3>Order</h3></Link> 
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto ">
                             
                            <Link className="menu"><h3>login</h3></Link>                                                                                    
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
            
    );
};

export default OrderNavbar;