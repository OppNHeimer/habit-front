import React from 'react'
import './habitBlock.css'

let Block = props => {
  let blockStyle = {
    margin: (`${props.size / 24}vw`),
    height: `${props.size}vw`,
    width: `${props.size}vw`,
    backgroundColor: props.color
  }

  return (
    <div className='habitBlock' style={blockStyle} />
  )
}

export default Block
