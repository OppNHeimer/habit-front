import React from 'react'
import axios from 'axios'
import { API_URL } from '../urls'
import Habit from '../Habit/Habit'

export function axiosGet (scope) {
  axios.get(API_URL)
    .then(res => {
      scope.setState({
        habits: res.data
      })
    })
    .catch(error => console.error(error))
}

export function axiosPost (name, scope) {
  if (name) {
    let hue = Math.floor(Math.random() * 360)
    axios.post(API_URL, {
      name: name,
      hue: hue,
      lightness: 98,
      streak: 0,
      complete: false
    })
    .then(res => {
      let habitsCopy = scope.state.habits
      habitsCopy.push(res.data)
      scope.setState({
        habits: habitsCopy,
        newHabitName: ''
      })
    })
  }
}

export function returnHabits (habits, scope) {
  let habitComponents = habits.map((habit, index) => {
    return (<Habit key={index} habit={habit} changeBackgroundColor={scope.props.changeBackgroundColor} />)
  })
  return habitComponents
}
