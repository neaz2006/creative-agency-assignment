import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import {faShoppingCart,faCar,faComment} from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';
import './OrderList.css'

const OrderList = () => {
    return (
        <Container className="ordr_body">
            <h5 className=" f_icon_clr btn"><FontAwesomeIcon icon={faShoppingCart} />  Order</h5>
            <h5 className=" f_icon_clr btn"><FontAwesomeIcon icon={faCar}/> Service List</h5>
            <h5 className=" f_icon_clr btn"><FontAwesomeIcon icon={faComment}/> Review</h5>            
        </Container>
    ); 
};

export default OrderList;