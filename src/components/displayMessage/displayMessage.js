import React, { Component } from 'react';
import {connect} from 'react-redux';

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
    return (
      <div id="message-block">
        {this.messageDetails()}
      </div>
    )
  }
}

function mapStateToProps(state) {
	return {
		messages: state.messages
	}
}



export default connect(mapStateToProps)(DisplayMessage)
