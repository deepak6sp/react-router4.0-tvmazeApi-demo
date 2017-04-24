import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

class App extends Component{

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.socket = io.connect('http://localhost:3000');
    this.socket.on('connection');

    this.socket.on("new message", (msg) => {
      document.getElementById("displayMessages").append(msg.newMsg);
    });
  }

  _handleClick(e) {
    e.preventDefault();
  }

  _handleSubmit(e) {
    e.preventDefault();
    let value = document.getElementById("message").value;
    this.socket.emit("send message", { sendMsg : value});
    document.getElementById("message").value = " ";
  }
  
  render() {
    return (
      <div>
        <div id="displayMessages"></div>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <textarea id="message" placeholder="Enter msg here"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default App
