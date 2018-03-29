import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Habits from '../Habits/Habits'
import Welcome from '../Welcome/Welcome'
import './App.css'
import axios from 'axios'
import { API_URL } from '../urls'
import { returnAuthHeader } from './AppHelpers'

class App extends Component {
  constructor () {
    super()
    this.state = {
      backgroundColor: 'hsl(60, 100%, 98%)'
      // need to get background color with get request
    }
    this.getBackgroundColor = this.getBackgroundColor.bind(this)
    this.updateBackgroundColor = this.updateBackgroundColor.bind(this)
  }

  updateBackgroundColor (color) {
    axios.put(
      API_URL + 'updateBackgroundColor',
      {
        backgroundColor: color
      },
      returnAuthHeader()
    )
    .then(res => {
      this.setState({
        backgroundColor: res.data.backgroundColor
      })
    })
  }

  getBackgroundColor () {
    axios.get(
      API_URL + 'getBackgroundColor', returnAuthHeader()
    )
    .then(res => {
      this.setState({
        backgroundColor: res.data.backgroundColor
      })
    })
  }

  render () {
    let backgroundColor = {
      backgroundColor: this.state.backgroundColor
    }
    return (
      <div className='App' style={backgroundColor}>
        <Switch>
          <Route
            path='/habit100/welcome/login'
            render={(props) => (
              localStorage.getItem('jwt')
                ? <Redirect to='/habit100' />
                : <Welcome {...props} mod='login' />
            )}
          />
          <Route
            path='/habit100/welcome/signup'
            render={(props) => (
              localStorage.getItem('jwt')
                ? <Redirect to='/habit100' />
                : <Welcome {...props} mod='signup' />
            )}
          />
          <Route
            path='/habit100/welcome'
            render={() => (
              localStorage.getItem('jwt')
                ? <Redirect to='/habit100' />
                : <Welcome />
            )}
          />
          <Route
            path='/habit100'
            render={() => (
              localStorage.getItem('jwt')
              ? <Habits getBackgroundColor={this.getBackgroundColor} updateBackgroundColor={this.updateBackgroundColor} />
              : <Redirect to='/habit100/welcome' />
            )}
          />
          <Route
            path='/*'
            render={() => <Redirect to='/habit100' />}
          />
        </Switch>
      </div>
    )
  }
}

export default App
