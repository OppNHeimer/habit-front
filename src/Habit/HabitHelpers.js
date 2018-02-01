import React from 'react'
import axios from 'axios'
import { API_URL } from '../urls'
import Block from '../Functional/HabitBlock'
import CheckButton from '../Functional/CheckButton'

export function update (props, state, scope) {
  let newStreak = state.streak + 1
  let blocks = returnBlocks(newStreak, props.habit, scope)
  if (!Array.isArray(blocks)) {
    state.complete = true
    props.changeBackgroundColor(blocks)
  }
  scope.setState({
    streak: newStreak,
    complete: state.complete,
    blocks: blocks
  })
  axios.put(API_URL + props.habit._id,
    {
      streak: newStreak,
      complete: state.complete
    })
    .catch(error => console.log(error))
}

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
