import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';

class CarsContent extends React.Component {
    reDirectToCarForm = () => {
        this.props.onClickedCar(this.props.car)
        this.props.history.push('/form')
    }
    reDirectToLogIn = () => {
        this.props.history.push('/login')
    }
    render() {
        return(
            <div className="div-cnt">
                <form className="sub-cfrm">
                    <img className="cfrm-img" src={this.props.car.img_url} alt="plc" />    
                    <hr />
                    <h3>{this.props.car.year} {this.props.car.make} {this.props.car.model}</h3>
                    <span className="cfrm-p2">Miles:  {this.props.car.miles}</span> 
                    <span className="cfrm-p">Price:  ${this.props.car.price}</span>
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

export default withRouter(CarsContent)