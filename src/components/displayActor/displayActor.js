import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Actor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actorId: window.location.pathname.substr(7),
      newResult: {}
    };
  }
  componentWillMount() {
    let newResult=this.props.actors.filter(result => result.show.id == this.state.actorId);
    this.setState({ newResult });
  }

  render() {
    let name, imageUrl, summary, language, runtime = "";
    console.log(this.state.newResult[0]);
    if(this.state.newResult[0].show){
      name = this.state.newResult[0].show.name;
      imageUrl = this.state.newResult[0].show.image.medium;
      summary = this.state.newResult[0].show.summary.replace(/<(?:.|\n)*?>/gm, '');
      language = this.state.newResult[0].show.language;
      runtime = this.state.newResult[0].show.runtime;
    }
    return (
      <div className="row" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title"> {name} </h4>
            </div>
            <div className="modal-body" style={{"height":"600px"}}>
              <div className="col-sm-6">
                <img src={imageUrl} />
                <p><b>Language</b>: {language}</p>
                <p><b>Runtime</b>: {runtime} minutes</p>
              </div>
              <div className="col-sm-6">
                <h4>Summary</h4>
                {summary}
              </div>
            </div>
            <div className="modal-footer">
              <Link to="/">
                <button type="button"
                  className="btn btn-default"
                  data-dismiss="modal">
                  Close
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		actors: state.display
	}
}

export default connect(mapStateToProps)(Actor)
