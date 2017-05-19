import React, { Component } from 'react';

 class Popup extends Component {
   render() {
     console.log(this.props);
     return  (
      <div id={"myModal-"+this.props.details.show.id} className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">{this.props.details.show.name}</h4>
            </div>
            <div className="modal-body">
              <p>Some text in the modal.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
     )
   }

}


export default Popup
