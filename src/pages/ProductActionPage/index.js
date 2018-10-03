import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { addProductRequest, fetchProductRequest, updateProductRequest } from '../../actions/index'

import ProductAction from '../../components/ProductAction/ProductAction'

class ProductActionPage extends Component {
  componentDidMount () {
    const { match } = this.props
    if (match) {
      this.props.fetchProduct(match.params.id)
    }
  }

  onSubmitForm = product => {
    if (!product) alert('No product input!')
    const { history } = this.props

    if (!product.id) {
      this.props.addProduct(product)
      history.goBack()
    } else {
      this.props.updateProduct(product)
      history.goBack()
    }
  }

  render() {
    const { product } = this.props
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <ProductAction
          product={ product }
          onSubmitForm={ this.onSubmitForm }
        />
        <Link to="/product/list" className="btn btn-danger mt-10">Back</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.product.product
})

const mapDispatchToProps = (dispatch, props) => ({
  addProduct: product => {
    dispatch(addProductRequest(product))
  },
  updateProduct: product => {
    dispatch(updateProductRequest(product))
  },
  fetchProduct: productId => {
    dispatch(fetchProductRequest(productId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)
