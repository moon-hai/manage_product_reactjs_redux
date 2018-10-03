import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProductsRequest, deleteProductRequest } from '../../actions/index'

import Products from '../../components/Products/Products'
import Product from '../../components/Product/Product'

class ProductsPage extends Component {
  componentDidMount () {
    this.props.fetchAllProducts()
  }

  onDeleteProduct = productId => {
    this.props.deleteProduct(productId)
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

const mapDispatchToProp = (dispatch, props) => ({
  fetchAllProducts: () => {
    dispatch(fetchProductsRequest())
  },
  deleteProduct: (productId) => {
    dispatch(deleteProductRequest(productId))
  }
})

export default connect(mapStateToProps, mapDispatchToProp)(ProductsPage)
