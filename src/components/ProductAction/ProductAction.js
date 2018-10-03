import React, { Component } from 'react'

class ProductAction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      price: '',
      status: ''
    }
  }

  onChange = event => {
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    const { id, name, price, status } = this.state
    const product = {
      id: id,
      name: name,
      price: price,
      status: status
    }
    this.props.onSubmitForm(product)
  }

  componentWillReceiveProps(newProps) {
    const { id, name, price, status } = newProps.product

    this.setState({
      id: id,
      name: name,
      price: price,
      status: status
    })
  }

  render() {
    const { name, price, status } = this.state

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
