import React from 'react'

const ImageComponent = props =>{
  return(
    <div className = {props.linepresence}>
      <p>{props.label}</p>
   <img src={props.image} />
    </div>
  )
}

export default ImageComponent
