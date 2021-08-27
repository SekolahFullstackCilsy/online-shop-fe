import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({isAdmin, menuData}) => {
  return (
    <>
      {isAdmin ? <div>Admin Page</div> : <div>User Page</div>}
      {menuData.map((val, key) => {
        return (
          <NavLink key={key} exact={val.exact} to={val.to}>{val.menuName}</NavLink>
        )
      })}
    </>
  )
}

export default Navbar

