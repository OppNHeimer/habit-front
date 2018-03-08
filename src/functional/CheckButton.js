import React from 'react'
import './checkButton.css'

let CheckButton = props => {
  let blockStyle = {
    margin: `${props.size / 24 + props.size / 120}vw`,
    height: `${props.size - props.size / 60}vw`,
    width: `${props.size - props.size / 60}vw`,
    border: `1px solid ${props.color}`,
  }
  return (    
    <button className='checkButton' style={blockStyle} onClick={props.onClick} />
  )
}

export default CheckButton
