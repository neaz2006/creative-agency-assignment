import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import {faShoppingCart,faCar,faComment} from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';
import './OrderList.css'

const OrderList = () => {
    return (
        <Container className="ordr_body">
            <Link className="d-flex f_icon_clr"><FontAwesomeIcon icon={faShoppingCart} />Order</Link>
            <Link className="d-flex f_icon_clr"><FontAwesomeIcon icon={faCar}/>Service List</Link>
            <Link className="d-flex f_icon_clr"><FontAwesomeIcon icon={faComment}/> Review</Link>            
        </Container>
    );
};

export default OrderList;