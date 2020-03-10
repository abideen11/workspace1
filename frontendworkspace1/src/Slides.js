import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default function Slides () {
    return(
        <div className="main-sld">
            <div className="div-sld">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="sld-img"
                        src="https://www.moneycrashers.com/wp-content/uploads/2019/04/plan-road-trip-tips-ideas-1068x713.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Out N' About</h3>
                        <p>Explore new horizons while discovering new sceneries.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="sld-img"
                        src="https://www.ertexoto.com/images/modeller/01_business/business_edition_modern_03.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Bask in Luxury</h3>
                        <p>Leather cushion seats, longer legroom, surround sound plus more plushness.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="sld-img"
                        src="http://img.autobytel.com/car-reviews/autobytel/133602-2020-chevrolet-corvette-stingray-road-test-and-review/2020-Chevrolet-Corvette-Stingray-handling.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Blaze the Trail</h3>
                        <p>We definitely give NASCAR and F1 a run for their money with our fleet.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
