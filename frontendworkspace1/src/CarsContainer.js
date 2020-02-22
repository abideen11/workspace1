import React from 'react';
import CarsContent from './CarsContent';
// import { BrowserRouter, Route } from 'react-router-dom';

export default class CarsContainer extends React.Component {
    render() {
        return(
            <div className="div-cn">
                <span className="sub-cn"></span>
                <div className="sub-cn2">
                    {this.props.cars.map(car => <CarsContent car={car} />)}
                </div>
            </div>
            // <BrowserRouter>
            //     <Route />
            // </BrowserRouter>
        )
    }
}
