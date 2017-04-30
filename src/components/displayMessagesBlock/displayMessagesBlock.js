import React, { Component } from 'react';
import DisplayMessage from "../displayMessage";

class DisplayMessagesBlock extends Component{

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="jumbotron" style={{"height": "50vh","overflow":"scroll"}}>
        <DisplayMessage/>
      </div>
    )
  }
}



export default DisplayMessagesBlock
