import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import "./OrderFrom.css"
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";

const OrderFrom = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addOrders', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Your order placed successfully')
                }
            })
    }
    return (

        <div className="ordr_frm-_body">
            <Form onSubmit={handleSubmit(onSubmit)} className="mt-5 ml-5 frm_in">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder={loggedInUser.email} /><br />
                    <Form.Control placeholder="Your name / company’s name" />
                    <Form.Control className="mt-3" placeholder="Grapich Design" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Your message" />
                    <Form.Control className="mt-3 mb-3" placeholder="Project Details" />
                    <Form.Control placeholder="Price" style={{ width: "50%" }} />
                    <input class="file-path validate" type="file" placeholder="Upload project file" className="file_uplod"></input>
                </Form.Group>
                <Button variant="dark" type="submit" className="btn_style">
                    Send
                 </Button>
            </Form>
        </div>
    );
};

export default OrderFrom;