import React, {Component} from 'react'

import './habits.css'
import { axiosGet, axiosPost, returnHabits } from './HabitsHelpers'
import NewHabitForm from '../functional/NewHabitForm'

class Habits extends Component {
  constructor () {
    super()
    this.state = {
      habits: null,
      newHabitName: ''
    }
    this.handleNewHabitChange = this.handleNewHabitChange.bind(this)
    this.createHabit = this.createHabit.bind(this)
  }

  componentDidMount () {
    axiosGet(this)
  }

  handleNewHabitChange (e) {
    this.setState({
      newHabitName: e.target.value
    })
  }

  createHabit (e) {
    e.preventDefault()
    axiosPost(this.state.newHabitName, this)
  }

  render () {
    return (
      <div className='habits'>
        <NewHabitForm
          newHabitName={this.state.newHabitName}
          handleNewHabitChange={this.handleNewHabitChange}
          createHabit={this.createHabit}
        />
        <div className='habits__list'>
          {this.state.habits && returnHabits(this.state.habits, this)}
        </div>
      </div>
    )
  }
}

export default Habits
