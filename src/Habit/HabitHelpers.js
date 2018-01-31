import React from 'react'
import axios from 'axios'
import { API_URL } from '../urls'
import Block from '../HabitBlock'

export function returnBlocks (streak, hue) {
  let blocks = []
  for (let i = 0; i < streak; i++) {
    let color = `hsl(${hue}, 100%, ${98 - i * 2}%)`
    blocks.push(
      <Block
        key={i}
        color={color} />)
  }
  return blocks
}

export function axiosIncrement (id, scope) {
  // let id = (this.props.habit._id)
  axios.put(API_URL + id)
    .then(res => {
      scope.setState({
        streak: res.data.streak
      })
    })
    .catch(error => console.log(error))
}
