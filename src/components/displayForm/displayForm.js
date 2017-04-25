import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

class DisplayForm extends Component{

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.socket = io.connect('http://localhost:3000');
    this.socket.on('connection');
  }

  _handleSubmit(e) {
    e.preventDefault();
    let text = document.getElementById("message").value;
    this.socket.emit("send message", { sendMsg : text});
    document.getElementById("message").value = " ";
  
  }

  render() {
    return (
        <form onSubmit={this._handleSubmit.bind(this)} className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-12">
              <textarea id="message" placeholder="Enter msg here" className="form-control" rows="3"></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
  }
}
export default DisplayForm
