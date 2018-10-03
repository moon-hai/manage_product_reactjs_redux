import * as type from '../constant/index'
import callApi from '../utils/apiCaller'

export const fetchProductsRequest = () => dispatch => {
  return callApi('products', 'GET', null)
          .then(res => {
            dispatch(fetchProducts(res.data))
          })
}

export const addProductRequest = product => dispatch => {
  return callApi('products', 'POST', product)
          .then(res => {
            dispatch(addProduct(product))
          })
}

export const deleteProductRequest = productId => dispatch => {
  return callApi(`products/${productId}`, 'DELETE', null)
          .then(res => {
            dispatch(deleteProduct(productId))
          })
}

export const fetchProductRequest = productId => dispatch => {
  return callApi(`products/${productId}`, 'GET', null)
                .then(res => {
                  dispatch(fetchProduct(res.data))
                })
}

export const fetchProducts = products => ({
  type: type.FETCH_ALL_PRODUCT,
  products
})

export const addProduct = product => ({
  type: type.ADD_PRODUCT,
  product
})

export const deleteProduct = productId => ({
  type: type.DELETE_PRODUCT,
  productId
})

export const fetchProduct = product => ({
  type: type.FETCH_PRODUCT,
  product
})
