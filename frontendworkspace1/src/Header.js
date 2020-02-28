import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { ButtonToolbar, Button } from 'react-bootstrap'

export default class Header extends React.Component {
    render() {
        return(
            <div className="main-head">
                {/* onClick */}
                {/* onSubmit */}
                <div className="head-tb">
                    <span className="span-f"><Link to="/">Home</Link></span>
                    <span className="span-t"><Link to="/cars">Cars</Link></span>
                    <span className="span-fo">Write a review</span>
                </div>
                <div className="div-sea">
                    <form className="form-sea">
                        <input type="text" placeholder={"Look for a car..."} />
                        <button><FontAwesomeIcon icon={faSearch} /></button>
                    </form>   
                </div>
                <div className="div-aa">
                    <ButtonToolbar>
                        <span className="span-aa">
                        <Button variant="outline-light">Login</Button>
                        </span>
                        <span className="span-aa2">
                        <Button variant="outline-light">Register</Button>
                        </span>
                    </ButtonToolbar>
                </div>
            </div>
        )
    }
}
