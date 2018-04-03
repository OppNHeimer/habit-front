import React, { Component } from 'react'
import './habit.css'
import { returnBlocks } from './HabitHelpers'
import axios from 'axios'
import { API_URL } from '../urls'
import { returnAuthHeader } from '../App/AppHelpers'

class Habit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      habit: this.props.habit,
      index: this.props.index
    }
    this.incrementStreak = this.incrementStreak.bind(this)
  }

  incrementStreak (e) {
    let complete = this.state.habit.complete
    let newStreak = this.state.habit.streak + 1
    if (newStreak >= 100) {
      this.props.updateBackgroundColor(`hsl(${this.state.habit.hue}, 100%, 98%)`)
      complete = true 
    }
    axios.put(
      API_URL + this.state.habit._id,
      {
        streak: newStreak,
        complete: complete
      },
      returnAuthHeader()
    )
    .then(res => {
      this.setState({
        habit: res.data
      })
    })
    .catch(err => console.log(err))
  }

  render () {
    let width
    console.log(window.innerWidth)
    if (window.innerWidth > 1000) {
      this.state.index > 1 ? width = {width: '33vw'} : width = {width: '70vw'}
    }
    if (window.innerWidth <= 1000) {
      this.state.index > 1 ? width = {width: '45vw'} : width = {width: '93vw'}
    }
    if (!this.state.habit.complete) {
      return (
        <div className='habit' style={width}>
          <h4 className='habit__h4'> {this.state.habit.name} </h4>
          <div className='habit__blocks'>
            {returnBlocks(this.state, this.state.habit, this)}
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Habit
