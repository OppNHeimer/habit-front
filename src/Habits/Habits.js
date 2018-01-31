import React, {Component} from 'react'
import axios from 'axios'

import {API_URL} from '../urls'
import Habit from '../Habit/Habit'

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
    axios.get(API_URL)
    .then(res => {
      this.setState({
        habits: res.data
      })
    })
    .catch(error => console.log(error))
  }

  handleNewHabitChange (e) {
    this.setState({
      newHabitName: e.target.value
    })
  }

  createHabit (e) {
    e.preventDefault()
    if (this.state.newHabitName) {
      let hue = Math.floor(Math.random() * 360)
      axios.post(API_URL, {
        name: this.state.newHabitName,
        hue: hue,
        streak: 1
      })
      .then(res => {
        let habitsCopy = this.state.habits
        habitsCopy.push(res.data)
        this.setState({
          habits: habitsCopy,
          newHabitName: ''
        })
      })
    }
  }

  render () {
    let habits
    if (this.state.habits) {
      habits = this.state.habits.map((habit, index) => {
        return (<Habit key={index} habit={habit} />)
      })
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
