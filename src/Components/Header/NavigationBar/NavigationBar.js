import React, { useState, useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import './NavigationBar.css'
import { UserContext } from '../../../App';

const NavigationBar = () => {
    const [loggedInUser, setLoggedinUser] = useContext(UserContext);

    const history = useHistory();
    const reDiract = () => {
        history.push('/LogOut');
    };

    return (
        <main>
            <Container className="top-header">
                <Navbar expand="lg">
                    <Navbar.Brand to="home" className=' logo'><Link className="menu btn " to="/"><img className="logo" src={logo} alt="" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="menu btn " to="home">Home</Link>
                            <Link className="menu btn " to="OurProtfolio">Our Protfolio</Link>
                            <Link className="menu btn " to="OurTeam">Our Team</Link>
                            <Link className="menu btn " to="ContactUs">Contact Us</Link>
                            <Link className="menu btn btn-dark text-white" to="LoginFrom">Login</Link>
                            <Link className="menu btn" onClick={() => reDiract()} >{loggedInUser.name}</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </main>
    );
};

export default NavigationBar;