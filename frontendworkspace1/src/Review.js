import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { Form, Col } from 'react-bootstrap';

export default function Review () {
    return(
        <div className="div-rvw">
            <div>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="firstName" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="lastName" placeholder="Last Name" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>
                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>
                    <Form.Group controlId="reviewNumber">
                        <Form.Label>Please rate your experience</Form.Label>
                        <Form.Control as="select" multiple>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="reviewTextarea">
                        <Form.Label>Please include any more ways we can improve</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}