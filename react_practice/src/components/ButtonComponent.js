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


// var React = require('react');
//
// var buttonStyle = {
//   margin: '10px 10px 10px 0'
// };
//
// var Button = React.createClass({
//   render: function () {
//     return (
//       <button
//         className="btn btn-default"
//         style={buttonStyle}
//         onClick={this.props.handleClick}>{this.props.label}</button>
//     );
//   }
// });
//
// module.exports = Button;
