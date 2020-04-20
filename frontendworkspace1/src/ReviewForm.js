import React from 'react';

export default class ReviewForm extends React.Component {
    state = {
        feedback: '',
        rating: null,
        reviewComplete: false
    }
    onFeedback = (e) => {this.setState({feedback: e.target.value})}
    onRating = (e) => {this.setState({rating: e.target.value})}
    onSubmit = () => {
        if(this.state.feedback.split('').length > 0 && (this.state.rating !== null && this.state.rating !== "Please enter a rating")) {
            this.setState({reviewComplete: !this.state.reviewComplete})
        }
        else {
            if(this.state.feedback === '') {
                alert("Please provide us with a feedback")
            }
            if (this.state.rating !== null || this.state.rating === "Please enter a rating") {
                alert("Please enter a rating")
            }
        }
    }
    render() {
        console.log(this.state.reviewWritten)
        return(
            this.state.reviewComplete ? <div className="rfm-alt">Thank you for your review. We always read every one and It helps us provide a better service.</div>
            :
            <div className="rvw-frm">
                <br />
                <h1 className="rvw-h1">{this.props.reviewCar.year} {this.props.reviewCar.make} {this.props.reviewCar.model}</h1>
                <br />
                <img className="rvw-img" src={this.props.reviewCar.img_url} alt="plc" />
                <br />
                <p className="rvw-p">Pickup Date: {this.props.reviewCar.start_Date} Return Date: {this.props.reviewCar.end_Date}</p>
                <br />
                <p>Feedback:</p>
                <textarea className="rvw-txt" value={this.state.feedback} onChange={this.onFeedback}></textarea>
                <p>Rating:</p>
                <select value={this.state.rating} onChange={this.onRating}>
                    <option value="Please enter a rating">Please enter a rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <br />
                <button className="rvw-btn" onClick={() => {this.onSubmit() ; this.props.hasReviewedCar()}}>Submit</button>
            </div>
        )
    }
}