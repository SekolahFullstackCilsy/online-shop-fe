import { LOGIN_USER_FAILED, LOGIN_USER_PENDING, LOGIN_USER_SUCCESS } from "../constants";

const initialState = {
  loading: false,
  userData: {},
  error: ''
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userData: payload,
        loading: false,
        error: ''
      }
    case LOGIN_USER_PENDING:
      return {
        ...state,
        loading: true
      }
    case LOGIN_USER_FAILED:
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