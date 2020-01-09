
import React, { useState } from 'react'
const ButtonComponent = props =>{
  const [colors, setColors] = useState("green")

  const buttonClick = (event)=>{
    event.preventDefault()
    if (colors === "green"){
      setColors("red")
    }else if(colors === "red"){
        setColors("green")
      }
  }
  return(
    <div>
    <button className={colors} onClick = {buttonClick}>{props.button} </button>
    </div>
  )
}
export default ButtonComponent
