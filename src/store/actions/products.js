import axios from 'axios'
import { GET_PRODUCT_PENDING,GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILED, API_URL, USER_DATA } from '../constants'

export const getProducts = (data) => {
  // data : 
  // {username: 'fgag', password: 'wagag'}
  return (dispatch) => {
    dispatch({type: GET_PRODUCT_PENDING})
    axios.get(`${API_URL}/products`, {
      headers: {
        'Authorization': `Bearer ${USER_DATA && USER_DATA.access_token}`
      }
    }).then(res => {
      console.log(res)
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: 
          res.data.data
      })
    })
    .catch(error => {
      dispatch({
        type: GET_PRODUCT_FAILED,
        payload: error
      })
    })
  }
}