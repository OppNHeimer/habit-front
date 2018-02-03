import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'

import Habits from '../Habits/Habits'
import Login from '../Login/Login'
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
            path='/login'
            component={Login}
          />
          <Route
            path='/'
            render={() => (
              <Habits changeBackgroundColor={this.changeBackgroundColor} />
              )
            }
          />
        </Switch>
      </div>
    )
  }
}

export default App
