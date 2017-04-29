import React, { Component } from 'react';


import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {submitForm} from '../../actions';

class DisplayForm extends Component{

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  _handleSubmit(e) {
    e.preventDefault();
    let text = document.getElementById("message").value;
    this.props.submitForm(text);

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

function matchDispatchToProps(dispatch) {
  return bindActionCreators({submitForm: submitForm}, dispatch);
}
export default connect('',matchDispatchToProps)(DisplayForm)
