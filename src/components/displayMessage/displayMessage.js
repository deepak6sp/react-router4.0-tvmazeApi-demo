import React, { Component } from 'react';
import io from 'socket.io-client';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {submitForm} from '../../actions';

class DisplayMessage extends Component{

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  messageDetails() {
    let messageDetails;
    if(this.props.messages.length == 0) {
      return  <h3 className="text-center">Message will be displayed here</h3>
    }
    return this.props.messages.map((element, index) => {
      return (
        <div className="well well-lg" key={index} >
          {element}
        </div>
      );
    });
  }

  render() {
    // let MessageDetails =

    return (
      <div id="message-block">
        {this.messageDetails()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
	return {
		messages: state.messages
	}
}



export default connect(mapStateToProps)(DisplayMessage)
