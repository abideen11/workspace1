import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import FooterMore from './FooterMore'
import CarsContainer from './CarsContainer';
import CarsContent from './CarsContent';
import CarsForm from './CarsForm'
import Error from './Error';

class App extends React.Component {
  state = {
    user: {},
    cars: [],
    firstColArray: [],
    secondColArray: [],
    clickedCar: null 
  }

  componentDidMount() {
    fetch("http://localhost:3000/cars")
    .then(r => r.json())
    .then(data => {
      this.setState({
        cars: data,
      })
    })
  }

  // firstCol = () => {
  //   this.setState({
  //     firstColArray: this.state.cars.filter(c => c.id%2 === 0)
  //   })
  // }

  onClickedCar = (car) => {
    this.setState({
      clickedCar: car
    })
  }

  render() {
    console.log(this.state.cars)
    // console.log(this.state.firstColArray)
    return(
      <BrowserRouter>
        <div>
          <Route component={Header} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cars" render={() => <CarsContainer cars={this.state.cars} onClickedCar={this.onClickedCar}/>} />
            <Route path="/form" render={() => <CarsForm clickedCar={this.state.clickedCar}/>} />
            <Route path="*" component={Error} />
          </Switch>
          <Route component={Footer} />
          <Route component={FooterMore} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;


