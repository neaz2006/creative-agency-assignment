import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './ShowCard.css'

const ShowCard = () => {
    return (
        <>
            <Container>
                <h1 className="mt-5 pt-5">Provide awesome <span className="clr_styl">services</span></h1>
                <div className="row mt-5 ">
                    <div className="col-md-4 justify-content-center">
                        <Card style={{ width: '18rem' }} className="full_card">
                            <Card.Img style={{ width: "26%", margin: "auto" }} className="mt-4" variant="top" src="https://i.ibb.co/34LJxt2/service1.png/171x180" roundedCircle />
                            <Card.Body>
                                <Card.Title>Web & Mobile design</Card.Title>
                                <Card.Text>
                                    We craft stunning and amazing web UI, using a well drrafted UX to fit your product.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }} className="full_card">
                            <Card.Img style={{ width: "26%", margin: "auto" }} className="mt-4" variant="top" src="https://i.ibb.co/47Ghn4t/service2.png/171x180" roundedCircle />
                            <Card.Body>
                                <Card.Title>Graphic design</Card.Title>
                                <Card.Text>
                                    Amazing flyers, social media posts and brand representations that would make your brand stand out.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }} className="full_card">
                            <Card.Img style={{ width: "26%", margin: "auto" }} className="mt-4" variant="top" src="https://i.ibb.co/NjD9RGF/service3.png/171x180" roundedCircle />
                            <Card.Body>
                                <Card.Title>Web development</Card.Title>
                                <Card.Text>
                                    With well written codes, we build amazing apps for all platforms, mobile and web apps in general.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>

        </>
    );
};

export default ShowCard;