import * as type from '../constant/index'

const initialState = { product: [] }

const product = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_PRODUCT:
      return {...state, product: action.product}
    default:
      return state
  }
}

export default product
