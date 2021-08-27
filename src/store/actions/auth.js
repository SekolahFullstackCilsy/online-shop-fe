import axios from 'axios'
import { LOGIN_USER_PENDING,LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, API_URL } from '../constants'

export const loginUser = (data) => {
  // data : 
  // {username: 'fgag', password: 'wagag'}
  return (dispatch) => {
    dispatch({type: LOGIN_USER_PENDING})
    axios.post(`${API_URL}/auth/login`, data).then(res => {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: 
          res.data.data
      })
      localStorage.setItem('userData', JSON.stringify(res.data.data))
    })
    .catch(error => {
      dispatch({
        type: LOGIN_USER_FAILED,
        payload: 'login failed'
      })
    })
  }
}