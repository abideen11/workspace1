import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewCars extends React.Component {
    reDirectToReviewForm = () => {
        this.props.onReviewCar(this.props.a)
        this.props.history.push('/reviewform')
    }
    render() {
        return(
            <div className="div-rvcr">
                <img className="rvcr-img" src={this.props.a.img_url} alt="plc" />
                <h2 className="rvcr-h2">{this.props.a.year} {this.props.a.make} {this.props.a.model}</h2>
                <p className="rvcr-p">Pickup Date:</p>
                <p className="rvcr-p2">{this.props.a.start_Date}</p>
                <p className="rvcr-p3">Return Date:</p>
                <p className="rvcr-p4">{this.props.a.end_Date}</p>
                <button className="rvcr-btn" onClick={this.reDirectToReviewForm}>Review</button>
            </div>
        )
    }
}

export default withRouter(ReviewCars)