import React, { useState, createContext, useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';

const OrderNavbar = () => {
    const [loggedInUser, setLoggedinUser] = useContext(UserContext)
    return (
            <Container className="top-header">
                <Navbar expand="lg">
                    <Navbar.Brand to="home"  className='logo mr-5'><Link className="menu btn " to="/"><img className="logo" src={logo} alt="" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Link className="menu ml-5"><h3>Order</h3></Link> 
                    <Navbar.Collapse id="basic-navbar-nav" className="ml-auto ">
                        <Nav className="ml-auto ">
                             
                            <Link className="menu"><h3>{loggedInUser.name}</h3></Link>                                                                                    
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
            
    );
};

export default OrderNavbar;