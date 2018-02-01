import React from 'react'
import check from '../images/check.png'

let CheckButton = props => {
  let blockStyle = {
    display: 'inline-block',
    margin: '2px',
    height: '7.9vw',
    width: '7.9vw',
    backgroundImage: `url(${check})`,
    backgroundSize: 'cover',
    backgroundColor: 'transparent',
    border: `1px outset ${props.color}`
  }

  return (
    <button style={blockStyle} onClick={props.onClick} />
  )
}

export default CheckButton
