import { GET_PRODUCT_FAILED, GET_PRODUCT_PENDING, GET_PRODUCT_SUCCESS } from "../constants";

const initialState = {
  loading: false,
  products: [],
  error: ''
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: payload,
        loading: false,
        error: ''
      }
    case GET_PRODUCT_PENDING:
      return {
        ...state,
        loading: true
      }
    case GET_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      }
  
    default:
      return state
  }
}

export default authReducer