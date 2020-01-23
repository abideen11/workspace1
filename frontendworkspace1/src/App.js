import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Header'

class App extends React.Component {
  state = {
    user: {},
    cars: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/cars")
    .then(r => r.json())
    .then(data => {
      this.setState({
        cars: data
      })
    })
  }

  render() {
    return(
      <BrowserRouter>
        <div>
          <Route component={Header} />
          <Switch>
            <Route></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
