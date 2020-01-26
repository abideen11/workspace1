import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import FooterMore from './FooterMore'

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
            <Route exact path="/" component={Home} />
          </Switch>
          <Route component={Footer} />
          <Route component={FooterMore} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
