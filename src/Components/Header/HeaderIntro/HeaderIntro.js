import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/Frame.png'
import './HeaderIntro.css'

const HeaderIntro = () => {
    return (
        <Container>
             <div className="row justify-content-between mt-5">
            <div className="col-md-4 mt-5">
                <h1>Let’s Grow Your Brand To The Next Level</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <Link className="btn btn-dark text-white">Hire Us</Link>
            </div>
            <div className="col-md-8 header_img ">
                <img src={logo} alt="" className="mb-5"/>
            </div>
        </div>
        </Container>
       
    );
};

export default HeaderIntro;