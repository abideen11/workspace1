import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export default function FooterMore () {
    return(
        <div className="main-fmo">
            <div className="div-fmo">
                <span className="span-fmo">Terms of Service</span>
                <span className="span-fmo">Privacy Policy</span>
                <span className="span-fmo">Ad Choice</span>
                <span className="span-fmo">Site Map</span>
            </div>
            <div className="div-fmo2"> 
                <p><FontAwesomeIcon icon={faCopyright} /> 2020 Business.com. All rights reserved.</p>
            </div>
        </div>
    )
}
