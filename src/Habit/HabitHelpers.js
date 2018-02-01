import React from 'react'
import axios from 'axios'
import { API_URL } from '../urls'
import Block from '../Functional/HabitBlock'
import CheckButton from '../Functional/CheckButton'

export function returnBlocks (streak, habit, scope) {
  let blocks = []
  let color
  for (let i = 0; i < streak; i++) {
    if (i < 50) {
      color = `hsl(${habit.hue}, 100%, ${98 - i * 2}%)`
    } else if (i >= 50 && i < 100) {
      color = `hsl(${habit.hue}, 100%, ${-(98 - i * 2)}%)`
    } else {
      return `hsl(${habit.hue}, 100%, ${habit.lightness - 2}%)`
    }
    blocks.push(<Block key={i} color={color} />)
  }
  blocks.push(<CheckButton key={1000} onClick={scope.incrementStreak} color={color} />)
  return blocks
}

export function axiosIncrement (id, scope) {
  console.log('increment')
  return (
    axios.put(API_URL + id)
    .then(res => {
      scope.setState({
        streak: res.data.streak
      })
    })
    .catch(error => console.error(error))
  )
}
