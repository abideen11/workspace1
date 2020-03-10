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
                            <li><Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}>Acura</Link></li>
                            <li><Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}>Audi</Link></li>
                            <li><Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}>Bentley</Link></li>
                            <li><Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}>BMW</Link></li>
                            <li><Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}>See more</Link></li>
                        </ul>
                    </div>
                    <div className="div-cmp">
                        <h4 className="head-two">Company</h4>
                        <ul className="div-lst2">
                            <li><Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}>About</Link></li>
                            <li><Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}>Contact</Link></li>
                            <li><Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}>Careers</Link></li>
                            <li><Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}>Become a Partner</Link></li>
                        </ul>
                    </div>
                    <div className="div-med">
                        <div className="div-cir">
                            <div>
                                <Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}><FontAwesomeIcon icon={faPinterestP} /></Link>
                            </div>
                        </div>
                        <div className="div-cir2">
                            <div>
                                <Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}><FontAwesomeIcon icon={faInstagram} /></Link>
                            </div>
                        </div>
                        <div className="div-cir3">
                            <div>
                                <Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}><FontAwesomeIcon icon={faTwitter} /></Link>
                            </div>
                        </div>
                        <div className="div-cir4">
                            <div>
                                <Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}><FontAwesomeIcon icon={faFacebookF} /></Link>
                            </div>
                        </div>
                        <div className="div-cir5">
                            <div>
                                <Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={this.reDirectToTemporary}><FontAwesomeIcon icon={faSnapchatGhost} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Footer) 
