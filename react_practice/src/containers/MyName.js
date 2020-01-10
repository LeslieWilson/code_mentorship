import React, {useState} from "react"
import Tile1 from '../components/Tile1.js'
import ImageComponent from '../components/ImageComponent.js'
import ButtonComponent from '../components/ButtonComponent.js'



const MyName = (props) =>{
  const [visibility, setVisibility] = useState("visible")


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
      visibility = {visibility}
      />
    )
  })


  let image = [
    {image:"https://i.postimg.cc/28ntcKB0/Screen-Shot-2020-01-03-at-3-26-54-PM.png",
    label:"pic 1ljkhlfkjdshflksajdfh"},
    {image:"https://i.postimg.cc/28ntcKB0/Screen-Shot-2020-01-03-at-3-26-54-PM.png",
   label: "pic2alskdjfhlksadjfhlakjdfh"}
  ]



  let imagepic = image.map(pic =>{
    return(
      <ImageComponent
      image = {pic.image}
      label = {pic.label}
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
    <div>
    <h1>Hi Im Leslie</h1>
    <ButtonComponent
    button = "hello!"
    />

    <button  onClick={btnClick}>testing</button>
    {information}
    {imagepic}
    </div>
  )

}



export default MyName
