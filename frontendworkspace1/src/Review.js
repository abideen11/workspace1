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
                        <Form.Label>Please rating your experience</Form.Label>
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
            {/* <h1>Testing</h1> */}
            {/* <ion-icon name="star-outline"></ion-icon> */}
            {/* <a className="star-outline"></a> */}
            {/* <span className="sub-rvw stars-80">★★★★★</span> */}
            {/* <div className="sub-rvw">
            </div> */}
            {/* <fieldset className="sub-rvw"> */}
                {/* <input type="radio" id="star5" name="rating" value="5" />
                <label className="full" for="star5" title="Awesome"><FontAwesomeIcon icon={faStar} /></label>
                <input type="radio" id="star4" name="rating" value="4" />
                <label className="full" for="star4" title="Pretty good"><FontAwesomeIcon icon={faStar} /></label>
                <input type="radio" id="star3" name="rating" value="3" />
                <label className="full" for="star3" title="Kinda bad"><FontAwesomeIcon icon={faStar} /></label>
                <input type="radio" id="star2" name="rating" value="2" />
                <label className="full" for="star2" title="Meh"><FontAwesomeIcon icon={faStar} /></label>
                <input type="radio" id="star1" name="rating" value="1" />
                <label className="full" for="star1" title="Sucks big time"><FontAwesomeIcon icon={faStar} /></label> */}
                {/* <FontAwesomeIcon icon={faStar} /> */}
            {/* </fieldset> */}
        </div>
    )
}