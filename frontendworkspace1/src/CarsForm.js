import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class CarsForm extends React.Component {
    state = {
        filledForm: false,
        startDate: null,
        endDate: null 
    }
    onFilledForm = () => {
        this.setState({
            filledForm: !this.state.filledForm
        })
    }
    render() {
        // style={{ textAlign: "center" }}
        return(
            this.state.filledForm ? <div className="div-rsv">Thank your for your reservation</div> :
            <div className="div-frm">
                <h1>{this.props.clickedCar.year} {this.props.clickedCar.make} {this.props.clickedCar.model}</h1>
                <div className="div-cal"></div>
                <button className="frm-sbm" onClick={this.onFilledForm}>Submit</button>
            </div>
        )
    }
}

export default withRouter(CarsForm)
