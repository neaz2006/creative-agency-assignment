import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import './Social.css'
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import ubar from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'

const Social = () => {
    return (
        <div>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item className="row">
                    <Container fluid>
                        <Row>
                            <Col><Nav.Link className="socal-icon" href="/home"><img src={slack} alt="" /></Nav.Link></Col>
                            <Col><Nav.Link className="socal-icon" href="/home"><img src={google} alt="" /></Nav.Link></Col>
                            <Col><Nav.Link className="socal-icon" href="/home"><img src={ubar} alt="" /></Nav.Link></Col>
                            <Col><Nav.Link className="socal-icon" href="/home"><img src={netflix} alt="" /></Nav.Link></Col>
                            <Col><Nav.Link className="socal-icon" href="/home"><img src={airbnb} alt="" /></Nav.Link></Col>    
                        </Row>
                    </Container>

                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Social;