import React from 'react';
import { Card, Container } from 'react-bootstrap';

const ClientCard = () => {
    return (
        <section className="justify-content-center">
            <Container>
                <h1 className="m-5 p-5">Clients <span className="clr_styl">Feedback</span></h1>
                <div className="row">
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }} className="full_card">
                            <div className="row p-4">
                                <div className="col-md-4"><Card.Img variant="top" src="https://i.ibb.co/V9tzKK5/customer-1.png/171x180" roundedCircle /></div>
                                <div className="col-md-8">
                                    <h5>Nash Patrik</h5>
                                    <p>CEO, Manpol</p>
                                </div>
                            </div>
                            <Card.Text className="pl-3 pr-3 pb-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                            </Card.Text>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }} className="full_card">
                            <div className="row p-4">
                                <div className="col-md-4"><Card.Img variant="top" src="https://i.ibb.co/QPjj0KQ/customer-2.png/171x180" roundedCircle /></div>
                                <div className="col-md-8">
                                    <h5>Miriam Barron</h5>
                                    <p>CEO, Manpol</p>
                                </div>
                            </div>
                            <Card.Text className="pl-3 pr-3 pb-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                            </Card.Text>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }} className="full_card">
                            <div className="row p-4">
                                <div className="col-md-4"><Card.Img variant="top" src="https://i.ibb.co/cJ1hpqB/customer-3.png/171x180" roundedCircle /></div>
                                <div className="col-md-8">
                                    <h5>Bria Malone</h5>
                                    <p>CEO, Manpol</p>
                                </div>
                            </div>
                            <Card.Text className="pl-3 pr-3 pb-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                            </Card.Text>
                        </Card>
                    </div>
                </div>
            </Container>

        </section>


    );
};

export default ClientCard;