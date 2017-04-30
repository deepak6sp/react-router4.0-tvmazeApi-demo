import React, { Component } from 'react';
import io from 'socket.io-client';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {receiveMessage} from '../../actions';

class DisplayForm extends Component{

  constructor(props) {
    super(props);
    this.state = {
      inputValue : ''
    }
  }

  componentDidMount() {
    this.socket = io.connect('http://localhost:3000');
    this.socket.on('connection');
    this._handleMessageEvent();
  }

  _handleSubmit(e) {
    e.preventDefault();
    let text = this.state.inputValue;
    this.socket.emit("send message", { sendMsg : text});
    this.setState({ inputValue : ''})

    if(document.getElementById("message-block").clientHeight > (window.innerHeight/6)){
      document.getElementById("message-block").lastChild.scrollIntoView();
    }

  }

  _handleMessageEvent() {
    this.socket.on("new message", (msg) => {
      this.props.receiveMessage(msg.newMsg);
    });
  }

  _handleChange(e) {
    this.setState({ inputValue : e.target.value})
  }

  render() {
    return (
        <form onSubmit={this._handleSubmit.bind(this)} className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-12">
              <textarea
                id="message"
                placeholder="Enter msg here"
                className="form-control"
                rows="3"
                value={this.state.inputValue}
                onChange={this._handleChange.bind(this)}>
              </textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({receiveMessage: receiveMessage}, dispatch);
}
export default connect('',matchDispatchToProps)(DisplayForm)
