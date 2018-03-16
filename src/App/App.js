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
        <Switch>
          <Route
            path='/habit100/welcome/login/'
            render={(props) => (
              localStorage.getItem('jwt')
                ? <Redirect to='/habit100/' />
                : <Welcome {...props} mod='login' />
            )}
          />
          <Route
            path='/habit100/welcome/signup/'
            render={(props) => (
              localStorage.getItem('jwt')
                ? <Redirect to='/habit100/' />
                : <Welcome {...props} mod='signup' />
            )}
          />
          <Route
            path='/habit100/welcome/'
            render={() => (
              localStorage.getItem('jwt')
                ? <Redirect to='/habit100/' />
                : <Welcome />
            )}
          />
          <Route
            path='/habit100/'
            render={() => (
              localStorage.getItem('jwt')
              ? <Habits changeBackgroundColor={this.changeBackgroundColor} />
              : <Redirect to='/habit100/welcome/' />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App
