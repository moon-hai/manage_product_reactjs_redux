import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import callApi from '../../utils/apiCaller'
import { addProductRequest, fetchProductRequest } from '../../actions/index'

import ProductAction from '../../components/ProductAction/ProductAction'

class ProductActionPage extends Component {
  componentDidMount () {
    const { match } = this.props
    if (match) {
      this.props.fetchProduct(match.params.id)
    }
  }

  onChange = e => {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value
    })
  }

  onSubmitForm = e => {
    e.preventDefault()
    const { id, txtName, txtPrice, chkbStatus } = this.state
    const { history } = this.props
    const product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    }

    if (!this.state.id) {
      callApi('products', 'POST', {
        name: txtName,
        price: txtPrice,
        status: chkbStatus
      }).then(res => {
        history.goBack()
      })
    } else {
      this.props.addProduct(product)
      history.goBack()
    }
  }

  render() {
    const { product } = this.props
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <ProductAction
          product={ product }
          onChange={ this.onChange }
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
  fetchProduct: productId => {
    dispatch(fetchProductRequest(productId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)
