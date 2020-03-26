import React from 'react';
import SearchResult from './SearchResult';

export default class Search extends React.Component {
    render() {
        console.log(this.props.searchCar)
        return(
            this.props.searchCar.length > 0 ? 
            <div className="div-src">
                {this.props.searchCar.map(aCar => <SearchResult aCar={aCar} onClickedCar={this.props.onClickedCar}/>)}
            </div> : 
            <div className="div-src2">We're sorry, we couldn't find what you are looking for.</div> 
        )
    }
} 