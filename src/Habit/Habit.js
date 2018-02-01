import React, { Component } from 'react'
import { returnBlocks, update } from './HabitHelpers'

class Habit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      streak: this.props.habit.streak,
      blocks: null,
      complete: this.props.habit.complete
    }
    this.incrementStreak = this.incrementStreak.bind(this)
  }

  incrementStreak (e) {
    update(this.props, this.state, this)
  }

  componentWillMount () {
    this.setState({
      blocks: returnBlocks(this.state.streak, this.props.habit, this)
    })
  }

  render () {
    console.log(this.state.complete)
    if (!this.state.complete) {
      return (
        <div>
          <p> {this.props.habit.name} </p>
          {this.state.blocks}
        </div>
      )
    } else {
      return null
    }
  }
}

export default Habit
