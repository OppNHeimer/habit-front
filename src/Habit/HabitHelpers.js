import React from 'react'
import Block from '../functional/HabitBlock'
import CheckButton from '../functional/CheckButton'

export function returnBlocks (state, habit, scope) {
  let blocks = []
  let color
  let size = determineSize(scope.state.index)
  blocks.push(<CheckButton key={1000} onClick={scope.incrementStreak} color={color} size={size} />)
  for (let i = state.habit.streak; i > 0; i--) {
    color = `hsl(${habit.hue}, 100%, ${100 - i}%)`
    blocks.push(<Block key={i} color={color} size={size} />)
  }
  return blocks
}

function determineSize (index) {
  if (index === 1) {
    return 6
  } else if (index === 2) {
    return 5
  } else {
    return 3
  }
}
