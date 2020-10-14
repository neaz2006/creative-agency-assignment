import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './CarouselSlide.css'
import { Container } from 'react-bootstrap';

const CarouselSlide = () => {
    return (
        <Container className="Carousel_hed">
            <div >
                <h1 className="carusel_intro text-white">Here are some of <span className="clr_styl">our works</span></h1>
                <Carousel autoPlay className="carsl_size col-sm-8">
                    <div className="col-md-12 col-sm-12">
                        <img src="https://i.ibb.co/PN7KNQg/carousel-1.png" />
                    </div>
                    <div className=" col-md-12 col-sm-12">
                        <img src="https://i.ibb.co/B35t64d/carousel-2.png" />
                    </div>
                    <div className=" col-md-12 col-sm-12">
                        <img src="https://i.ibb.co/RYW9YPL/carousel-3.png" />
                    </div>
                </Carousel>
            </div>

        </Container>
    );
};

export default CarouselSlide;