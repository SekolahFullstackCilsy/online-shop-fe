import React from 'react';
import Navbar from '../components/navbar';

const Layout = ({ children }) => {
  const menuData = [
    {to: '/', menuName: 'Home', exact: true},
    {to: '/shop', menuName: 'Shop', exact: false},
    {to: '/auth', menuName: 'Auth', exact: false},
  ]
  return (
    <div style={{background: 'teal'}}>
      <Navbar menuData={menuData} />
      <h1>Header</h1>
      <div>
        {children}
      </div>
      <h1>Footer</h1>
    </div>
  )
}

export default Layout