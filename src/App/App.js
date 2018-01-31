import React, { Component } from 'react'
import Habits from '../Habits/Habits'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      backgroundColor: 'hsl(60, 100%, 98%)'
    }
  }

  render () {
    let backgroundColor = {
      backgroundColor: this.state.backgroundColor
    }
    return (
      <div className='App' style={backgroundColor}>
        <Habits />
      </div>
    )
  }
}

export default App
