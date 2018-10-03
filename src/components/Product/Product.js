import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Product extends Component {
  onDeleteProduct = productId => {
    if (confirm('Are you sure to delete this product ?')) {  //eslint-disable-line
      this.props.onDeleteProduct(productId)
    }
  }

  render() {
    const { product, index } = this.props

    return (
      <tr>
        <td>{ index + 1 }</td>
        <td>{ product.name }</td>
        <td>{ product.price }</td>
        <td>
          <span className={ product.status ? 'label label-warning' : 'label label-danger' }>
            { product.status ? 'stocking' : 'out of stuck' }
          </span>
        </td>
        <td>
          <Link to={`/product/${product.id}/edit`} className="btn btn-success">Edit</Link>
          <button
            type="button"
            className="btn btn-danger ml-10"
            onClick={ () => this.onDeleteProduct(product.id) }>Delete</button>
        </td>
      </tr>
    )
  }
}
