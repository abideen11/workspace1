import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default function HomeReviews () {
    return(
        <div className="div-hrv">
            <h1 className="hd-hrv">Testimonials</h1>
            <Carousel>
                <Carousel.Item>
        
                    <div className="sub-hrv">
                    <h3>"Awesome product! Awesome people!"</h3>
                    <p>Joanne, Richmond, VA</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
               
                    <div className="sub-hrv">
                    <h3>"When in doubt, trust Axelerator."</h3>
                    <p>Shaun, Los Angeles, CA</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
   
                    <div className="sub-hrv">
                    <h3>"The best car rental service, period."</h3>
                    <p>Damian, Newark, NJ</p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

