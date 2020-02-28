import React from 'react';
import CarsContent from './CarsContent';
// import { BrowserRouter, Route } from 'react-router-dom';
import { GridList, GridListTile } from '@material-ui/core'

export default class CarsContainer extends React.Component {
    render() {
        return(
            <div className="div-cn">
                <div className="sub-cn">
                    <h3 className="h-ctg">Category:</h3>
                    <select className="sel-ctg">
                        <option className="all">Please select a category</option>
                        <option className="coupe">Coupe</option>
                        <option className="sedan">Sedan</option>
                        <option className="suv">SUV</option>
                        <option className="truck">Truck</option>
                        <option className="van">Van</option>
                        <option className="crossover">Crossover</option>
                    </select>
                    <h3 className="h-yr">Year:</h3>
                    <select className="sel-yr">
                        <option className="select">Please select a year</option>
                        <option className="2008">2008</option>
                        <option className="2012">2012</option>
                        <option className="2014">2014</option>
                        <option className="2015">2015</option>
                        <option className="2017">2017</option>
                        <option className="2020">2020</option>
                    </select>
                    <h3 className="h-mil">Mileage:</h3>
                    <select className="sel-mil">
                        <option className="select-mileage">Please choose a range</option>
                        <option className="50000">0 - 50,000</option>
                        <option className="100000">50,000 - 100,000</option>
                        <option className="150000">100,000 - 150,000</option>
                    </select>
                    <h3 className="h-pri">Price:</h3>
                    <select className="sel-pri">
                        <option className="select-price">Please choose a range</option>
                        <option className="200">$0 - $200</option>
                        <option className="400">$200 - $400</option>
                        <option className="600">$400 - $600</option>
                    </select>
                    <hr></hr>
                    <h5 className="h-br">Select Brand</h5>
                    <select className="sel-br">
                        <option value="lexus">Lexus</option>
                        <option value="hyundai">Hyundai</option>
                        <option value="ford">Ford</option>
                        <option value="chevrolet">Chevrolet</option>
                        <option value="nissan">Nissan</option>
                        <option value="volkswagen">Volkswagen</option>
                        <option value="chrysler">Chrysler</option>
                    </select>
                    <h5 className="h-mod">Select Model</h5>
                    <select className="sel-mod">
                        <option value="type1">Based on selected brand</option>
                        <option value="type2">Based on selected brand</option>
                    </select>
                </div>
                <div className="sub-cn2">
                    {this.props.cars.map(car => <CarsContent car={car} onClickedCar={this.props.onClickedCar} />)}
                    {/* {this.props.firstColArray.map(car1 => <CarsContent car1={car1} /> )} */}
                    {/* <CarsContent car={car} /> */}
                </div>
            </div>
            // <BrowserRouter>
            //     <Route />
            // </BrowserRouter>
        )
    }
}
