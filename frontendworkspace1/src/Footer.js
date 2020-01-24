import React from 'react';
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
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
                            <li><Link>See more</Link></li>
                        </ul>
                    </div>
                    <div className="div-cmp">
                        <h4 className="head-two">Company</h4>
                        <ul className="div-lst2">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Careers</li>
                            <li>Become a Partner</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
