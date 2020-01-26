import React from 'react';
import Slides from './Slides'
import Service from './Service'
import Message from './Message';
import HomeReviews from './HomeReviews'

export default class Home extends React.Component {
    render() {
        return(
            <div className="main-home">
                <Slides />
                <Message />
                <Service />
                <HomeReviews />
            </div>
        )
    }
}
