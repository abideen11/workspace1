import React from 'react';
import { Media, ButtonToolbar, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';

class CarsContent extends React.Component {
    reDirectToCarForm = () => {
        this.props.onClickedCar(this.props.car)
        this.props.history.push('/form')
    }
    render() {
        console.log(this.props.clickedCar)
        return(
            <div className="div-cnt">
                <form className="sub-cfrm">
                    {/* <span className="cfrm-img">  */}
                        <img src={this.props.car.img_url} alt="plc" />    
                    {/* </span> */}
                    <hr></hr>
                    <h3>{this.props.car.year} {this.props.car.make} {this.props.car.model}</h3>
                    <span className="cfrm-p2">Miles:  {this.props.car.miles}</span> 
                    <span className="cfrm-p">Price:  ${this.props.car.price}</span>
                    <span className="cfrm-btn">
                        <ButtonToolbar>
                            <Button variant="primary" onClick={this.reDirectToCarForm}>Book</Button>
                        </ButtonToolbar>
                    </span> 
                </form>
            </div>
        )
    }
}

export default withRouter(CarsContent)