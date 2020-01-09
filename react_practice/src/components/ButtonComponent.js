import React from 'react'


const ButtonComponent = props =>{
  return(
    <div className="button">
    <button>{props.button}</button>
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
