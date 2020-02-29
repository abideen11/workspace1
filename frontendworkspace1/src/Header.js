import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'
import { ButtonToolbar, Button } from 'react-bootstrap'

class Header extends React.Component {
    reDirectToTemporary = () => {
        this.props.history.push('/temporary')
    }
    render() {
        return(
            <div className="main-head">
                {/* onClick */}
                {/* onSubmit */}
                <div className="head-tb">
                    <span className="span-f"><Link to="/">Home</Link></span>
                    <span className="span-t"><Link to="/cars">Cars</Link></span>
                    <span className="span-fo"><Link to="/review">Write a review</Link></span>
                </div>
                <div className="div-sea">
                    <form className="form-sea">
                        <input type="text" placeholder={"Look for a car..."} />
                        <button onClick={this.reDirectToTemporary}><FontAwesomeIcon icon={faSearch} /></button>
                    </form>   
                </div>
                <div className="div-aa">
                    <ButtonToolbar>
                        <span className="span-aa">
                        <Button variant="outline-light" onClick={this.reDirectToTemporary}>Login</Button>
                        </span>
                        <span className="span-aa2">
                        <Button variant="outline-light" onClick={this.reDirectToTemporary}>Register</Button>
                        </span>
                    </ButtonToolbar>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)
