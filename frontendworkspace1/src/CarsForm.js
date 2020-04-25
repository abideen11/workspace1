import React from 'react';
import { withRouter } from 'react-router-dom';

class CarsForm extends React.Component {
    state = {
        filledForm: false,
        startDate: null,
        endDate: null,
        currentTime: null,
        startTime: 0,
        endTime: 0,
        tax: 0,
        convertStart: null,
        convertEnd: null,
        days: 0,
        currentDate: new Date(),
        insurance: 50,
        subtotal: 0,
        currentCar: {
            make: this.props.clickedCar.make,
            model: this.props.clickedCar.model,
            year: this.props.clickedCar.year,
            miles: this.props.clickedCar.miles,
            price: this.props.clickedCar.price,
            category: this.props.clickedCar.category, 
            img_url: this.props.clickedCar.img_url,
            start_Date: null,
            end_Date: null,
            total_Days: 0,
            sub_Total: 0,
            total_Insurance: 0,
            total_Tax: 0,
            total: 0
        }
    }
    onFilledForm = () => {
        this.setState({
            filledForm: !this.state.filledForm,
        })
    }
    onStartDate = (e) => {
        this.setState({
            startDate: e.target.value,
            convertStart: new Date(e.target.value),
            currentTime: this.state.currentDate.getTime()
        })
    }
    onEndDate = (e) => {
        this.setState({
            endDate: e.target.value,
            convertEnd: new Date(e.target.value)
        })
    }
    onStartTime = () => {this.setState({startTime: this.state.convertStart.getTime()})}
    onEndTime = () => {this.setState({endTime: this.state.convertEnd.getTime()})}
    onDays = () => {
        if(this.state.currentTime > this.state.startTime || this.state.startTime > this.state.endTime) {
            alert("Please enter a valid date: MM/DD/YYYY")
        }
        else {
            this.setState({
                days: Math.ceil((this.state.endTime - this.state.startTime)/(1000*3600*24))
            })
        }
    }
    onMore = () => {
        this.setState(i => ({
            currentCar: {
                ...i.currentCar,
                start_Date: this.state.startDate,
                end_Date: this.state.endDate,
                total_Days: this.state.days,
                sub_Total: this.props.clickedCar.price*this.state.days,
                total_Insurance: this.state.insurance*this.state.days,
                total_Tax: Math.round(((this.props.clickedCar.price*this.state.days*0.0825) + Number.EPSILON)*100)/100,
                total: (this.state.insurance*this.state.days) + (this.props.clickedCar.price*this.state.days) + Math.round(((this.props.clickedCar.price*this.state.days*0.0825) + Number.EPSILON)*100)/100
            }
        }))
    }
    onReservedCar = () => {
        this.props.reservedCar.push(this.state.currentCar)
    }
    render() {
        return(
            this.state.filledForm ? <div className="div-rsv">Thank your for your reservation.</div> :
            <div className="div-frm">
            <div className="sub-frm">
                <h1>{this.props.clickedCar.year} {this.props.clickedCar.make} {this.props.clickedCar.model}</h1>
                <img className="img-frm" src={this.props.clickedCar.img_url} alt="plc" />
                <p className="p3-frm">Please enter a pickup date:</p>
                <form className="fst-frm">
                    <input value={this.state.startDate} onChange={(e) => this.onStartDate(e)} placeholder={"                 MM/DD/YYYY"} />
                </form>
                <p className="p4-frm">Please enter a return date:</p>
                <form className="lst-frm">
                    <input value={this.state.endDate} onChange={(e) => {this.onEndDate(e) ; this.onStartTime()}} placeholder={"                 MM/DD/YYYY"} />
                </form>
                <p className="p-frm">Subtotal (${this.props.clickedCar.price}*{this.state.days} days):</p>
                <p className="p2-frm"> {this.state.days > 0 ? this.props.clickedCar.price*this.state.days : null} </p>
                <p className="p9-frm">Insurance (${this.state.insurance}*{this.state.days} days):</p>
                <p className="p10-frm"> {this.state.days > 0 ? this.state.insurance*this.state.days : null} </p>
                <p className="p5-frm">Tax (8.25%):</p>
                <p className="p6-frm"> {this.state.days > 0 ? Math.round(((this.props.clickedCar.price*this.state.days*0.0825) + Number.EPSILON)*100)/100 : null} </p>
                <p className="p7-frm">Total:</p>
                <p className="p8-frm"> {this.state.days > 0 ? (this.state.insurance*this.state.days) + (this.props.clickedCar.price*this.state.days) + Math.round(((this.props.clickedCar.price*this.state.days*0.0825) + Number.EPSILON)*100)/100 : null} </p>
                <div className="div-cal"></div>
                <button className="ttl-frm" onClick={() => {this.onEndTime() ; this.onDays() ; this.onMore()}}>Total</button>
                {this.state.days > 0 ?
                <button className="frm-sbm" onClick={() => {this.onFilledForm(); this.onReservedCar()}}>Accept</button>
                :
                <button className="alt-sbm" disabled>Accept</button>
                }
            </div>
            </div>
        )
    }
}

export default withRouter(CarsForm)
