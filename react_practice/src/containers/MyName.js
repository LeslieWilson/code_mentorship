import React from "react"
import Tile1 from '../components/Tile1.js'


const MyName = (props) =>{
  let data = [
    {name: "leslie",
    text: "hello my name is leslie!!!"},

    {name:  "steve",
   text:" fkjfkjhfkfkfk"}
  ]

  let information = data.map(tile1 =>{
    return(
      <Tile1
      name = {tile1.name}
      text = {tile1.text}
      />
    )
  })

  return(
    <div>
    <h1>Hi Im Leslie</h1>
    {information}
    </div>
  )
}

export default MyName
