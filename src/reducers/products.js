import * as type from '../constant/index'

const initialState = { products: [] }

const products = (state = initialState, action) => {
  let tmp
  let index
  switch (action.type) {
    case type.FETCH_ALL_PRODUCT:
      return { ...state, products: action.products }
    case type.ADD_PRODUCT:
      state.products.push(action.product)
      return { ...state }
    case type.UPDATE_PRODUCT:
      index = state.products.findIndex(product => product.id === action.product.id)
      state.products[index] = action.product
      return { ...state }
    case type.DELETE_PRODUCT:
      tmp = state.products.filter(product => product.id !== action.productId)
      return { ...state, products: tmp }
    default:
      return state
  }
}

export default products
