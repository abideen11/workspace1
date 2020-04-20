import React from 'react';
import { withRouter } from 'react-router-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';

class SearchResult extends React.Component {
    reDirectToCarForm = () => {
        this.props.onClickedCar(this.props.aCar)
        this.props.history.push('/form')
    }
    reDirectToLogIn = () => {
        this.props.history.push('/login')
    }
    render() {
        return(
            <div className="div-srs">
                <form className="sub-cfrm">
                    <img className="cfrm-img" src={this.props.aCar.img_url} alt="plc" />
                    <hr />
                    <h3>{this.props.aCar.year} {this.props.aCar.make}  {this.props.aCar.model}</h3>
                    <span className="cfrm-p2">Miles: {this.props.aCar.miles}</span>
                    <span className="cfrm-p">Price:  ${this.props.aCar.price}</span>
                    <span className="cfrm-btn">
                        {localStorage.token ?
                        <ButtonToolbar>
                            <Button variant="primary" onClick={this.reDirectToCarForm}>Select</Button>
                        </ButtonToolbar>
                        :
                        <ButtonToolbar>
                            <Button variant="primary" onClick={this.reDirectToLogIn}>Login</Button>
                        </ButtonToolbar>
                        }
                    </span>
                </form> 
            </div>
        )
    }
}

export default withRouter(SearchResult)