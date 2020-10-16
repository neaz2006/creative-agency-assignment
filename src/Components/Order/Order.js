import React from 'react';
import { Container } from 'react-bootstrap';
import OrderFrom from './OrderFrom/OrderFrom';
import OrderList from './OrderList/OrderList';
import OrderNavbar from './OrderNavbar/OrderNavbar';

const Order = () => {
    return (
        <Container>
            
            <div  className="row">
            <OrderNavbar></OrderNavbar>
                <div className="col-md-2 mt-5"><OrderList ></OrderList></div>
                <div className="col-md-10 m-auto"><OrderFrom ></OrderFrom></div>            
            </div>
                        
        </Container>
    );
};

export default Order;