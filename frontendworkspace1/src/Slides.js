import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default function Slides () {
    return(
        <div className="main-sld">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.moneycrashers.com/wp-content/uploads/2019/04/plan-road-trip-tips-ideas-1068x713.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.ertexoto.com/images/modeller/01_business/business_edition_modern_03.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://img.autobytel.com/car-reviews/autobytel/133602-2020-chevrolet-corvette-stingray-road-test-and-review/2020-Chevrolet-Corvette-Stingray-handling.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
