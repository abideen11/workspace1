import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookF, faSnapchatGhost, faPinterestP } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
    reDirectToTemporary = () => {
        this.props.history.push('/temporary')
    }
    render() {
        return(
            <div className="main-foot">
                <div className="div-ftb">
                    <div className="div-prt">
                        <h4 className="head-one">Partners</h4>
                        <ul className="div-lst1">
                            <li>Acura</li>
                            <li>Audi</li>
                            <li>Bentley</li>
                            <li>BMW</li>
                            <li><Link style={{ textDecoration: 'none' }} onClick={this.reDirectToTemporary}>See more</Link></li>
                        </ul>
                    </div>
                    <div className="div-cmp">
                        <h4 className="head-two">Company</h4>
                        <ul className="div-lst2">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Careers</li>
                            <li><Link style={{ textDecoration: 'none' }} onClick={this.reDirectToTemporary}>Become a Partner</Link></li>
                        </ul>
                    </div>
                    <div className="div-med">
                        <div className="div-cir">
                            <div>
                                <Link style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faPinterestP} /></Link>
                            </div>
                        </div>
                        <div className="div-cir2">
                            <div>
                                <Link style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faInstagram} /></Link>
                            </div>
                        </div>
                        <div className="div-cir3">
                            <div>
                                <Link style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faTwitter} /></Link>
                            </div>
                        </div>
                        <div className="div-cir4">
                            <div>
                                <Link style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faFacebookF} /></Link>
                            </div>
                        </div>
                        <div className="div-cir5">
                            <div>
                                <Link style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faSnapchatGhost} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Footer) 
