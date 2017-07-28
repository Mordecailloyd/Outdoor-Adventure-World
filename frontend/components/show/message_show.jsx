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
            <h4>Review This Product</h4>
            <div className="form-group">
              <label for="inputRating" className="col-lg-2 control-label">
                Rating:</label>
              <div className="col-lg-10">
                  <span type="text" className="form-control"
                    id="inputRating" placeholder="Rating"
                    value={this.state.rating} />
                </div>
            </div>

            <div className="form-group">
              <label for="inputTitle" className="col-lg-2 control-label">
                Title:</label>
              <div className="col-lg-10">
                  <span type="text" className="form-control"
                    id="inputTitle" placeholder="Title"
                    value={this.state.title} />
                </div>
            </div>

            <div className="form-group">
              <label for="inputBody"
                className="col-lg-2 control-label">Body:</label>
              <div className="col-lg-10">
                  <span type="body" className="form-control"
                    id="inputBody" placeholder="Body"
                    value={this.state.body} />
                </div>
            </div>
          </fieldset>
        </form>
    );
  }
}
