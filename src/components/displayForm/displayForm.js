import React, { Component } from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchText} from '../../actions';


class DisplayForm extends Component{

  constructor(props) {
    super(props);
    this.state = {
      inputValue : ''
    }
  }

  componentDidMount() {

  }

  _handleSubmit(e) {
    e.preventDefault();
    let text = this.state.inputValue;
    this.props.searchText(text);
    this.setState({ inputValue : ''})
  }

  _handleMessageEvent() {

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
                placeholder="Enter tv show name here"
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
  return bindActionCreators({searchText: searchText}, dispatch);
}
export default connect(null,matchDispatchToProps)(DisplayForm)
