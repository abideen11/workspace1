import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'
import { ButtonToolbar, Button } from 'react-bootstrap'

class Header extends React.Component {
    // onClick={this.reDirectToTemporary}
    reDirectToTemporary = () => {
        this.props.history.push('/temporary')
    }
    // reDirectToLogIn = () => {
    //     this.props.history.push('/login')
    // }
    // reDirectToRegister = () => {
    //     this.props.history.push('/register')
    // }
    render() {
        return(
            <div className="main-head">
                <div className="head-tb">
                    <a></a>
                    <span className="span-f"><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></span>
                    <span className="span-t"><Link to="/cars" style={{ color: 'inherit', textDecoration: 'none' }}>Cars</Link></span>
                    <span className="span-fo"><Link to="/review" style={{ color: 'inherit', textDecoration: 'none' }}>Write a review</Link></span>
                </div>
                <div className="div-sea">
                    <form className="form-sea">
                        <input type="text" placeholder={"Look for a car..."} />
                        <button><Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}><FontAwesomeIcon icon={faSearch} /></Link></button>
                    </form>   
                </div>
                <div className="div-aa">
                    <ButtonToolbar>
                        <span className="span-aa">
                        <Button variant="outline-light"><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link></Button>
                        </span>
                        <span className="span-aa2">
                        <Button variant="outline-light"><Link to="/register" style={{ color: 'inherit', textDecoration: 'none' }}>Register</Link></Button>
                        </span>
                    </ButtonToolbar>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)
