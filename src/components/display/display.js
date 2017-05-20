import React, { Component } from 'react';
import {connect} from 'react-redux';
import Popup from '../displayPopup';
import Actor from '../displayActor';
import { Link } from 'react-router-dom';


class Display extends Component{

  displayDetails() {
    let displayDetails;

    if(this.props.display.length == 0) {

      return  <h3 className="text-center">Message will be displayed here</h3>

    } else {
      return this.props.display.map(element => {
          if(element.show.image != null) {
            return (
                <div className="col-sm-4" key={element.show.id} >
                  <Link to={"/actor/"+element.show.id}>
                  <img
                    src={element.show.image.original}
                    style={{"margin":"10px","width":"200px"}} />
                  </Link>
                    <Popup details={element}/>
                </div>
            );
          }
      });
    }
  }

  render() {
    return (
      <div id="message-block">
        <div className="row" >
          {this.displayDetails()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
	return {
		display: state.display
	}
}

export default connect(mapStateToProps)(Display)
