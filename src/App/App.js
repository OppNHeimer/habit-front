import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Habits from '../Habits/Habits'
import Welcome from '../Welcome/Welcome'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      backgroundColor: 'hsl(60, 100%, 98%)'
    }
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this)
  }

  changeBackgroundColor (color) {
    this.setState({
      backgroundColor: color
    })
  }

  render () {
    let backgroundColor = {
      backgroundColor: this.state.backgroundColor
    }
    return (
      <div className='App' style={backgroundColor}>
        <h1>HABIT100</h1>

        <Switch>
          <Route
            path='/welcome/login'
            render={(props) => (
              localStorage.getItem('jwt')
                ? <Redirect to='/' />
                : <Welcome {...props} mod='login' />
            )}
          />
          <Route
            path='/welcome/signup'
            render={(props) => (
              localStorage.getItem('jwt')
                ? <Redirect to='/' />
                : <Welcome {...props} mod='signup' />
            )}
          />
          <Route
            path='/welcome'
            render={() => (
              localStorage.getItem('jwt')
              ? <Redirect to='/' />
              : <Welcome />
            )}
          />
          <Route
            path='/'
            render={() => (
              localStorage.getItem('jwt')
              ? <Habits changeBackgroundColor={this.changeBackgroundColor} />
              : <Redirect to='/welcome' />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App
