import React from 'react'
import './addHabitButton.css'

let AddHabitButton = props => {
  let blockStyle = {
    backgroundImage: `url(${props.image})`
  }
  return (    
    <button 
        className='addHabitButton' 
        style={blockStyle} 
        onClick = {props.clickAction}
    />
  )
}

export default AddHabitButton
