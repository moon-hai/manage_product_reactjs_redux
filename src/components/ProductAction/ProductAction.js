import React, { Component } from 'react'

class ProductAction extends Component {
  onChange = event => {
    this.props.onChange(event)
  }

  onSubmitForm = event => {
    this.props.onSubmitForm(event)
  }

  render() {
    const { name, price, status } = this.props.product

    return(
      <form onSubmit={ this.onSubmitForm }>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input product name"
            name="name"
            value={ name }
            onChange={ this.onChange } />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input product price"
            name="price"
            value={ price }
            onChange={ this.onChange } />
        </div>
        <div className="form-group">
          <label>Status</label>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="status"
                checked={ status }
                value={ status }
                onChange={ this.onChange } />
                Is stocking ?
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    )
  }
}

export default ProductAction
