import React, { Component } from 'react'
import './habit.css'
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
    console.log('increment')
  }

  componentWillMount () {
    this.setState({
      blocks: returnBlocks(this.state.streak, this.props.habit, this)
    })
  }

  render () {
    if (!this.state.complete) {
      return (
        <div className='habit'>
          <h4 className='habit__h4'> {this.props.habit.name} </h4>
          <div className='habit__blocks'>
            {this.state.blocks}
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Habit
