import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

class FooterMore extends React.Component {
    reDirectToTemporary = () => {
        this.props.history.push('/temporary')
    }
    render() {
        return(
            <div className="main-fmo">
                <div className="div-fmo">
                    <span className="span-fmo"><Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}>Terms of Service</Link></span>
                    <span className="span-fmo"><Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}>Privacy Policy</Link></span>
                    <span className="span-fmo"><Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}>Ad Choice</Link></span>
                    <span className="span-fmo"><Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}>Site Map</Link></span>
                </div>
                <div className="div-fmo2">
                    <p><FontAwesomeIcon icon={faCopyright} /> 2020 Business.com. All rights reserved.</p>
                </div>
            </div>
        )
    }
}

export default withRouter(FooterMore)