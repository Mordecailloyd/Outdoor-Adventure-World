import React from 'react';

export default class MessageShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      rating: '',
      product_id: ''
    };
  }




  render() {
    return (
        <form className="form-horizontal" >
          <fieldset>
            
            <div className="form-group">
              <label for="inputRating" className="col-lg-2 control-label">
                Rating:</label>
              <div className="col-lg-10">
                  <span type="text" className="form-control"
                    id="inputRating" placeholder="Rating"
                    >{this.props.message.rating}</span>
                </div>
            </div>

            <div className="form-group">
              <label for="inputTitle" className="col-lg-2 control-label">
                Title:</label>
              <div className="col-lg-10">
                  <span type="text" className="form-control"
                    id="inputTitle" placeholder="Title"
                    >{this.props.message.title}</span>
                </div>
            </div>

            <div className="form-group">
              <label for="inputBody"
                className="col-lg-2 control-label">Body:</label>
              <div className="col-lg-10">
                  <span type="body" className="form-control"
                    id="inputBody" placeholder="Body"
                    >{this.props.message.body}</span>
                </div>
            </div>
          </fieldset>
        </form>
    );
  }
}
