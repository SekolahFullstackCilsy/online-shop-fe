
export const API_URL = 'http://localhost:8000'
export const USER_DATA = JSON.parse(localStorage.getItem('userData')) 
console.log(USER_DATA)
export const LOGIN_USER_PENDING = '[USER] LOGIN PENDING'
export const LOGIN_USER_SUCCESS = '[USER] LOGIN SUCCESS'
export const LOGIN_USER_FAILED = '[USER] LOGIN FAILED'

export const GET_PRODUCT_PENDING = '[USER] GET PRODUCT PENDING'
export const GET_PRODUCT_SUCCESS = '[USER] GET PRODUCT SUCCESS'
export const GET_PRODUCT_FAILED = '[USER] GET PRODUCT FAILED'