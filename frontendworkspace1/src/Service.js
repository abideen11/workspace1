import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faWheelchair, faAward } from '@fortawesome/free-solid-svg-icons';

export default function Service () {
    return(
        <div className="main-srv">
            <div className="div-ref">
                <FontAwesomeIcon icon={faHandshake} />
                <h3>Money-back Gurantee</h3>
                <p className="yu">
                    If you decide to not use the service.
                    Don't worry, we offer a refund within the 30 
                    days the service was purchased.
                </p>
            </div>
            <div className="div-dis">
                <FontAwesomeIcon icon={faWheelchair} />
                <h3>Accessibility</h3>
                <p className="yu">
                    Our vehicles are equipped with mobility assistance.
                    If you need help in knowing how it works, our Associates
                    will gladly show you how it works.
                </p>
            </div>
            <div className="div-awrd">
                <FontAwesomeIcon icon={faAward} />
                <h3>Exceptional Service</h3>
                <p className="yu">
                    Award winning customer service that's always listen and resolve
                    any of your queries. Please don't hesitate to reach our Associates if
                    you are have any questions, concerns or comments.
                </p>
            </div>
        </div>
    )
}
