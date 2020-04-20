import React from 'react';
import { withRouter } from 'react-router-dom';
import ReviewCars from './ReviewCars';

class Review extends React.Component {
    state = {
        reviewSubmitted: false 
    }
    onSubmitReview = () => {
        this.setState({
            reviewSubmitted: !this.state.reviewSubmitted
        })
    }
    reDirectToLogIn = () => {
        this.props.history.push('/login')
    }
    render() {
        return(
            localStorage.token ? 
            this.props.reservedCar.length > 0 ? 
            <div className="rvw-alt">
                <h1>Review Cars</h1> 
                <br />
                {this.props.reservedCar.map(a => <ReviewCars a={a} onReviewCar={this.props.onReviewCar} />)}
                <br />
            </div>
            :
            <div className="rvw-oth">
                <h1>No Car Has Been Reserved</h1>
                <p>Please select the Car tab to see all of our options or if you have a particular car in mind, please use the search box to find.</p>
            </div> 
            :
            <div className="div-rvw">
                <div className="rvw-alt2">
                    <h1>Please Log In</h1>
                    <br />
                    <button onClick={this.reDirectToLogIn}>Log In</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Review)