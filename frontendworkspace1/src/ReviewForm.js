import React from 'react';

export default class ReviewForm extends React.Component {
    state = {
        feedback: '',
        rating: "Please enter a rating",
        reviewComplete: false
    }
    onFeedback = (e) => {this.setState({feedback: e.target.value})}
    onRating = (e) => {this.setState({rating: e.target.value})}
    onSubmit = () => {
        if(this.state.feedback.split('').length > 0 && this.state.rating !== "Please enter a rating") {
            this.setState({reviewComplete: !this.state.reviewComplete})
        }
        else {
            if(this.state.feedback === '') {
                alert("Please provide us with a feedback")
            }
            if (this.state.rating === "Please enter a rating") {
                alert("Please enter a rating")
            }
        }
    }
    render() {
        return(
            this.state.reviewComplete ? <div className="rfm-alt">Thank you for your review. We always read them and it helps us provide a better service.</div>
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
                <p className="rvw-nte">5: Highest Rating</p>
                <p className="rvw-nte2">1: Lowest Rating</p>
                <p>Rating:</p>
                <select value={this.state.rating} onChange={this.onRating}>
                    <option value="Please enter a rating">Please enter a rating</option>
                    <option value="1">5</option>
                    <option value="2">4</option>
                    <option value="3">3</option>
                    <option value="4">2</option>
                    <option value="5">1</option>
                </select>
                <br />
                <br />
                <button className="rvw-btn" onClick={() => {this.onSubmit() ; this.props.hasReviewedCar()}}>Submit</button>
            </div>
        )
    }
}