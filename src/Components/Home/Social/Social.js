import React, { useState } from 'react';
import { Col, Container, Nav, Row, Navbar } from 'react-bootstrap';
import './Social.css';

const socialImgs = [
    { image: "https://i.ibb.co/9Ydj55N/slack.png", },
    { image: "https://i.ibb.co/T4jZ6dv/google.png" },
    { image: "https://i.ibb.co/7Q4G5tv/uber.png" },
    { image: "https://i.ibb.co/0FZrbVL/netflix.png" },
    { image: "https://i.ibb.co/rppJsnZ/airbnb.png" }
]

const Social = () => {    
    return (
        <section>
            <Container>
                <Row className="justify-content-between">
                    {
                        socialImgs.map(socialImg =>
                            <div className="">
                                <img src={socialImg.image} alt="" className="socal-icon" />
                            </div>
                        )
                    }
                </Row>
            </Container>
        </section>
    )
};

export default Social;