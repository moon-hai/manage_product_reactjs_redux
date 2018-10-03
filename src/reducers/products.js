import * as type from '../constant/index'

const initialState = { products: [] }

const products = (state = initialState, action) => {
  let tmp
  switch (action.type) {
    case type.FETCH_ALL_PRODUCT:
      return { ...state, products: action.products }
    case type.ADD_PRODUCT:
      tmp = state.products.push(action.product)
      return { ...state, products: tmp }
    case type.DELETE_PRODUCT:
      tmp = state.products.filter(product => product.id !== action.productId)
      console.log(tmp)
      return { ...state, products: tmp }
    default:
      return state
  }
}

export default products
