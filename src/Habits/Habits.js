import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './habits.css'
import { axiosGet, axiosPost, returnHabits } from './HabitsHelpers'
// import AddHabitButton from '../functional/AddHabitButton'
import NewHabitForm from '../NewHabitForm/NewHabitForm'

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
          <div className='habits__logout'>
            <Link 
              to='/welcome' 
              onClick={() => localStorage.removeItem('jwt')}>
              logout  
            </Link>
          </div> 
          <div className='habits__new-form'>
            <NewHabitForm
              newHabitName={this.state.newHabitName}
              handleNewHabitChange={this.handleNewHabitChange}
              createHabit={this.createHabit}
            />
          </div>
          <div className='habits__list'>
            {this.state.habits && returnHabits(this.state.habits, this)}
          </div>
        </div>
    )
  }
}

export default Habits
