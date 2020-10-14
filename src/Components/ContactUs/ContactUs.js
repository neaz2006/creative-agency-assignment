import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className="contactus_body pt-5">
            <Container>
                <div className="row m-5 p-5">
                    <div className="col-md-6">
                        <h1>Let us handle your project, professionally.</h1>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-5">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Your email address" /><br />
                                <Form.Control placeholder="Your name / company’s name" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder="Your message" />
                            </Form.Group>
                            <Button variant="dark" type="submit">
                                Send
                            </Button>
                        </Form>
                    </div>
                </div>
                <footer class="page-footer font-small blue">
                    <div class="footer-copyright text-center py-3">{new Date().getFullYear()} Copyright || from Mozumder Neaz
                    </div>

                </footer>

            </Container>
        </div>
    );
};

export default ContactUs;