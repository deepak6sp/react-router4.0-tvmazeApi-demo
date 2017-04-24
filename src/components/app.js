import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

class App extends Component{
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.socket = io.connect('http://localhost:3000');
    // Add a connect listener
    this.socket.on('connection', function(sock) {
      sock.on('disconnect', function() {

      });
    });
  }
  render() {
    return (
      <div>Client socket demo</div>
    )
  }
}
export default App
