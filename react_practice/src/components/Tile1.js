import React from 'react'

const Tile1 = props =>{
  return(
    <div className = {props.visibility}>
    <p>{props.name}</p>
    <p>{props.text}</p>
    </div>
  )
}

export default Tile1
