import React from 'react';
import { Media } from 'react-bootstrap'

export default class CarsContent extends React.Component {
    render() {
        return(
            <div className="div-cnt">
                <div className="sub-cnt">
                <Media>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src="https://image.shutterstock.com/image-photo/boy-praying-god-stock-image-260nw-1064089271.jpg"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>Media Heading</h5>
                        {/* <p>{this.props.car.make} </p> */}
                        <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                        </p>
                    </Media.Body>
                </Media>
                </div>
            </div>
        )
    }
}