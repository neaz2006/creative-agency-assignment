import React, { useState } from 'react';
import { Col, Container, Nav, Row, Navbar } from 'react-bootstrap';
import './Social.css'

const Social = () => {
    const socialImgs = [
        { image: "https://i.ibb.co/wC1qBrb/slack.png", },
        { image: "https://i.ibb.co/1v28vYY/google.png" },
        { image: "https://i.ibb.co/zWcqmMs/uber.png" },
        { image: "https://i.ibb.co/jgXjfPP/netflix.png" },
        { image: "https://i.ibb.co/zWcqmMs/uber.png" }
    ]
    console.log(socialImgs);

    const [socialIcon, setSociaalIcon] = useState(socialImgs[0]);
    return (
        <Container>
            <Row className="justify-content-between">
                {
                    socialImgs.map(socialImg =>
                        <div className="">
                            <img src={socialImg.image} alt="" className="socal-icon " />
                        </div>
                    )

                }

            </Row>
        </Container>

    );
};

export default Social;