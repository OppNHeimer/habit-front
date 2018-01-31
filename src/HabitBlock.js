import React from 'react'

let Block = props => {
  console.log(props)
  let blockStyle = {
    display: 'inline-block',
    margin: '2px',
    height: '40px',
    width: '40px',
    backgroundColor: props.color,
    boxShadow: '0 4px 1px 0 rgba(0, 0, 0, 0.2)'
  }

  return (
    <div style={blockStyle} />
  )
}

export default Block
