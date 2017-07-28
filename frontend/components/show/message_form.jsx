import React from 'react';

export default class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      rating: '',
      product_id: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update= this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({rating: parseInt(this.state.rating)}, ()=>
      this.setState({product_id: parseInt(this.props.selectedProduct.id)}, () =>
        this.props.createMessage(this.state).then(()=>{
          this.setState({
            title: '',
            body: '',
            rating: '',
            product_id: this.props.selectedProduct.id
          });
        })
      )
    );
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    return (
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <h4>Review This Product</h4>
            <div className="form-group">
              <label for="inputRating" className="col-lg-2 control-label">
                Rating:</label>
              <div className="col-lg-10">
                  <input type="text" className="form-control"
                    id="inputRating" placeholder="Rating"
                    value={this.state.rating}
                    onChange={this.update('rating')} />
                </div>
            </div>

            <div className="form-group">
              <label for="inputTitle" className="col-lg-2 control-label">
                Title:</label>
              <div className="col-lg-10">
                  <input type="text" className="form-control"
                    id="inputTitle" placeholder="Title"
                    value={this.state.title}
                    onChange={this.update('title')} />
                </div>
            </div>

            <div className="form-group">
              <label for="inputBody"
                className="col-lg-2 control-label">Body:</label>
              <div className="col-lg-10">
                  <input type="body" className="form-control"
                    id="inputBody" placeholder="Body"
                    value={this.state.body}
                    onChange={this.update('body')} />
                </div>
            </div>
            <div className="form-group">
              <div className="col-lg-10 col-lg-offset-2">
                <button type="submit" className="message-button"
                  onClick={this.handleSubmit}>Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
    );
  }
}
