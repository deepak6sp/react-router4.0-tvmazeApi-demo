import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

class DisplayMessage extends Component{

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  
  }

  render() {
    let MessageDetails = this.props.message.map((element, index) => {
      return (
        <div className="well well-lg" key={index} >
          {element}
        </div>
      );
    });
    if(this.props.message.length == 0) {
      MessageDetails = <h3 className="text-center">Message will be displayed here</h3>;
    }
    return (
      <div id="message-block">
        {MessageDetails}
      </div>
    )
  }
}
export default DisplayMessage
