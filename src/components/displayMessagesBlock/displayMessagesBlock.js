import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import DisplayMessage from "../displayMessage";

class DisplayMessagesBlock extends Component{

  constructor(props) {
    super(props);
    this.state = {
      message : []
    }
  }

  componentDidMount() {
    this.socket = io.connect('http://localhost:3000');
    this.socket.on('connection');

    this.socket.on("new message", (msg) => {
      this.state.message.push(msg.newMsg);
      this.setState({message : this.state.message});

      if(document.getElementById("message-block").clientHeight > (window.innerHeight/3)){
        document.getElementById("message-block").lastChild.scrollIntoView();
      }
    });

  }

  render() {
    return (
      <div className="jumbotron" style={{"height": "50vh","overflow":"scroll"}}>
        <DisplayMessage message={this.state.message}/>
      </div>
    )
  }
}
export default DisplayMessagesBlock
