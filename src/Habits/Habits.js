import React, {Component} from 'react'
import axios from 'axios'

import {API_URL} from '../urls'
import { axiosGet, axiosPost, returnHabits } from './HabitsHelpers'

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
    let habits
    if (this.state.habits) {
      habits = returnHabits(this.state.habits)
    }

    return (
      <div>
        <form>
          <input
            type='text'
            value={this.state.newHabitName}
            placeholder='new habit'
            onChange={this.handleNewHabitChange}
            />
          <input
            type='submit'
            value='create'
            onClick={this.createHabit}
            />
        </form>
        {habits}
      </div>
    )
  }
}

export default Habits
