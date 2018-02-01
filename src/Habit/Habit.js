import React, { Component } from 'react'
import { returnBlocks, axiosIncrement } from './HabitHelpers'

class Habit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      streak: this.props.habit.streak,
      blocks: null,
      complete: false
    }
    this.incrementStreak = this.incrementStreak.bind(this)
  }

  incrementStreak (e) {
    axiosIncrement(this.props.habit._id, this)
    .then(() => {
      let blocks = returnBlocks(this.state.streak, this.props.habit, this)
      if (!Array.isArray(blocks) && !this.state.complete) {
        this.setState({
          complete: true
        })
        this.props.changeBackgroundColor(blocks)
      } else {
        this.setState({
          blocks: blocks
        })
      }
    })
  }

  render () {
    let blocks = returnBlocks(this.state.streak, this.props.habit, this)
    if (!this.state.complete) {
      return (
        <div>
          <p> {this.props.habit.name} </p>
          {this.state.blocks || blocks}
        </div>
      )
    } else {
      return null
    }
  }
}

export default Habit
