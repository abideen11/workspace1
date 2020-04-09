import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faWheelchair, faAward } from '@fortawesome/free-solid-svg-icons';

export default function Service () {
    return(
        <div className="main-srv">
            <div className="div-srv">
                <FontAwesomeIcon icon={faHandshake} />
                <h3>Money-back Gurantee</h3>
                <p className="p-srv">
                    If you decide to cancel the service.
                    Don't worry, we offer a refund within the 30 
                    days the service was purchased.
                </p>
            </div>
            <div className="div-srv">
                <FontAwesomeIcon icon={faWheelchair} />
                <h3>Accessibility</h3>
                <p className="p-srv">
                    Our vehicles are equipped with mobility assistance.
                    If you need help in knowing how it works, our associates
                    will gladly show you.
                </p>
            </div>
            <div className="div-srv">
                <FontAwesomeIcon icon={faAward} />
                <h3>Exceptional Service</h3>
                <p className="p-srv">
                    Award winning customer service that'll always listen and resolve
                    all of your queries. Please don't hesitate to reach our associates if
                    you have any questions, concerns or comments.
                </p>
            </div>
        </div>
    )
}
