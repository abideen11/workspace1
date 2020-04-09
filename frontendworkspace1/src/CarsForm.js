import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import MultipleDatePicker from 'react-multiple-datepicker'

class CarsForm extends React.Component {
    state = {
        filledForm: false
        // startDate: null,
        // endDate: null 
    }
    onFilledForm = () => {
        this.setState({
            filledForm: !this.state.filledForm
        })
    }
    // onStartDate = (date1) => {
    //     this.setState({
    //         startDate: date1
    //     })
    // }
    // onEndDate = (date2) => {
    //     this.setState({
    //         endDate: date2
    //     })
    // }
    render() {
        // style={{ textAlign: "center" }}
        // console.log(this.props.onStartDate)
        // console.log(this.props.onEndDate)
        return(
            this.state.filledForm ? <div className="div-rsv">Thank your for your reservation</div> :
            <div className="div-frm">
                <h1>{this.props.clickedCar.year} {this.props.clickedCar.make} {this.props.clickedCar.model}</h1>
                <br />
                <br />
                <MultipleDatePicker
                    // onSubmit={dates => console.log('date ', dates)}
                    // onChange={(date) => {this.props.onStartDate(date) ; this.props.onEndDate(date)}}
                />
                <br />
                <br />
                <p className="p-frm">Subtotal: </p>
                <p className="p2-frm"> {this.props.clickedCar.price} </p>
                {/* <div className="s-frm"><p> {this.props.clickedCar.price} </p></div> */}
                <div className="div-cal"></div>
                <button className="frm-sbm" onClick={this.onFilledForm}>Submit</button>
            </div>
        )
    }
}

export default withRouter(CarsForm)
