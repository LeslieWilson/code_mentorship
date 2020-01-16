import React, {useState} from "react"
import Os from '../components/Os.js'

const Display=(props)=>{
  const[visibility, setVisibility] = useState("visible")
  let oInfo = [
    {information:"o(1) is the best order of o to have because no matter how large your data is your function never slows down, called constant time"},
    {information: "o(n^2) is the worst order to have, quadratic time slows down quickly as you move through the function, searching through a serach, order of magnitude increases exponentially as your data size increases "}
  ]

  let information = oInfo.map(info =>{
    return(
      <Os
      information = {info.information}
      visibility = {visibility}
      />
    )
  })

  const btnClick = (event)=>{
    event.preventDefault()
    if(visibility === "visible"){
      setVisibility("hidden")
    }else if(visibility  === "hidden"){
      setVisibility("visible")
    }

  }

  return(
    <>
    <h1>HI!</h1>
    <button onClick={btnClick}>testing</button>
   {information}
    </>

  )
}

export default Display
