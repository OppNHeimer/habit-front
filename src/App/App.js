import React, { Component } from 'react'
import Habits from '../Habits/Habits'
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
        <Habits changeBackgroundColor={this.changeBackgroundColor} />
      </div>
    )
  }
}

export default App
