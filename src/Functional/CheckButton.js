import React from 'react'
import './checkButton.css'

let CheckButton = props => {
  let blockStyle = {
    margin: (`${props.size / 24 + props.size / 120}vw`),
    height: `${props.size - props.size / 60}vw`,
    width: `${props.size - props.size / 60}vw`,
    border: `0.1vw outset ${props.color}`
  }
  console.log(props.size)
  return (
    <button style={blockStyle} onClick={props.onClick} />
  )
}

export default CheckButton
