import React from 'react'
import axios from 'axios'
import { API_URL } from '../urls'
import Block from '../Functional/HabitBlock'
import CheckButton from '../Functional/CheckButton'

export function returnBlocks (streak, hue, scope) {
  let blocks = []
  let color
  for (let i = 0; i < streak; i++) {
    color = `hsl(${hue}, 100%, ${98 - i * 2}%)`
    blocks.push(<Block key={i} color={color} />)
  }
  blocks.push(<CheckButton onClick={scope.incrementStreak} color={color} />)
  return blocks
}

export function axiosIncrement (id, scope) {
  axios.put(API_URL + id)
    .then(res => {
      scope.setState({
        streak: res.data.streak
      })
    })
    .catch(error => console.log(error))
}
