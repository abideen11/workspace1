import React from 'react';
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
import Review from './Review';
import Temporary from './Temporary';
import LogIn from './LogIn';
import Register from './Register';
import Search from './Search'

class App extends React.Component {
  state = {
    user: {},
    cars: [],
    carsArray: [],
    carsArrayYear: [],
    firstColArray: [],
    secondColArray: [],
    filterCar: [],
    searchCar: [],
    clickedCar: null,
    eArray: null,
    aux: null,
    subtotalAmount: null,
    taxAmount: null,
    totalAmount: null,
    startDate: null,
    endDate: null 
  }

  componentDidMount() {
    fetch("http://localhost:3000/cars")
    .then(r => r.json())
    .then(data => {
      this.setState({
        cars: data,
        carsArray: data
      })
    })
  }

  // firstCol = () => {
  //   this.setState({
  //     firstColArray: this.state.cars.filter(c => c.id%2 === 0)
  //   })
  // }

  firstCol = () => {
    this.setState({
      firstColArray: this.state.carsArray.slice(this.state.carsArray.length/2)
    })
  }

  onFilterCar = (e) => {
    if(e === "Please select a category" || e === "Please select a year" || e === "Please choose a range") {
      this.setState({
        carsArray: this.state.cars  
      })
    }
    else {
      if(e === "Sedan" || e === "Coupe" || e === "SUV" || e === "Truck" || e === "Van" || e === "Crossover") {
        this.setState({
          carsArray: this.state.cars.filter(aCar => aCar.category === e)
        })
      }
      if(e === "2008" || e === "2010" || e === "2012" || e === "2014" || e === "2015" || e === "2017" || e === "2020") {
        this.setState({
          carsArray: this.state.cars.filter(aCar => aCar.year === parseInt(e))
        })
      }
      if(e === "50000" || e === "100000" || e === "150000") {
        this.setState({
          carsArray: this.state.cars.filter(aCar => (aCar.miles <= parseInt(e) && aCar.miles >= (parseInt(e)-50000)) )
        })
      }
      if(e === "200" || e === "400" || e === "600") {
        this.setState({
          carsArray: this.state.cars.filter(aCar => (aCar.price <= parseInt(e) && aCar.price >= (parseInt(e)-200)) )
        })
      }
    }
  }

  onClickedCar = (car) => {
    this.setState({
      clickedCar: car
    })
  }

  onSearch = (e) => {
    this.setState({aux: e})
    this.setState({searchCar: []})
    this.state.cars.map(
      i => {if(i.make.toLowerCase() === e.toLowerCase()) {
        this.setState({
          searchCar: this.state.cars.filter(i => i.make.toLowerCase() === e.toLowerCase())
        })
      }
      else {
        if(i.model.toLowerCase() === e.toLowerCase()) {
          this.setState({
            searchCar: this.state.cars.filter(i => i.model.toLowerCase() === e.toLowerCase())
          })
        }
        if(i.category.toLowerCase() === e.toLowerCase()) {
          this.setState({
            searchCar: this.state.cars.filter(i => i.category.toLowerCase() === e.toLowerCase())
          })
        }
        if(i.year === parseInt(e)) {
          this.setState({
            searchCar: this.state.cars.filter(i => i.year === parseInt(e))
          })
        }
      }
    }
    )
  }

  // onStartDate = (date1) => {
  //   this.setState({
  //     startDate: date1
  //   })
  // }

  // onEndDate = (date2) => {
  //   this.setState({
  //     endDate: date2
  //   })
  // }
  
  render() {
    console.log(this.state.cars)
    console.log(this.state.firstColArray)
    // console.log(this.state.carsArray.slice(this.state.carsArray.length/2))
    console.log(this.state.carsArray)
    console.log(this.state.aux)
    console.log(this.state.searchCar) 
    console.log(this.state.startDate)
    console.log(this.state.endDate)
    return(
      <BrowserRouter>
        <div>
          <Route render={() => <Header onSearch={this.onSearch} />} /> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cars" render={() => <CarsContainer carsArray={this.state.carsArray} onFilterCar={this.onFilterCar} onClickedCar={this.onClickedCar} onStartDate={this.onStartDate} onEndDate={this.onEndDate} />} />
            <Route path="/form" render={() => <CarsForm clickedCar={this.state.clickedCar}/>} />
            <Route path="/login" component={LogIn} />
            <Route path="/register" component={Register} />
            <Route path="/review" component={Review} />
            <Route path="/search" render={() => <Search searchCar={this.state.searchCar} onClickedCar={this.onClickedCar}/>} />
            <Route path="/temporary" component={Temporary} />
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


