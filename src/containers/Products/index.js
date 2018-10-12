import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProductsRequest, deleteProductRequest } from '../../actions/index'

import Products from '../../components/Products/Products'
import Product from '../../components/Product/Product'

class ProductsPage extends Component {
  componentDidMount () {
    this.props.fetchProductsRequest()
  }

  onDeleteProduct = productId => {
    this.props.deleteProductRequest(productId)
  }

  render() {
    const { products } = this.props

    return (
      <div className="container">
        <Link to='/product/add' className="btn btn-info">Add Product</Link>
        <Products>
          { this.showProduct(products) }
        </Products>
      </div>
    )
  }

  showProduct = products => {
    return (
      products.map((product, index) => {
        return <Product
                key={ product.id }
                product={ product }
                index={ index }
                onDeleteProduct = { this.onDeleteProduct }
              />
      })
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.products
})

const mapDispatchToProps = { fetchProductsRequest, deleteProductRequest }

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)
