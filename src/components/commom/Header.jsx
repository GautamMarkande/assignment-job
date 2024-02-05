import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../commom/Header.css';
function Header() {
  const navigate = useNavigate(null)
  return (
    <div className='headerContainer'>
        <h1 className='headerHeading' onClick={()=>navigate('/')}>Currency Exchanges</h1>
        <div className='links'>
      <NavLink to='/symbols'>
        Supported Symbols
      </NavLink>
      <NavLink to='/rates'>
        Exchange rates
      </NavLink>
      {/* <NavLink to='/hrates'>
        Historical Rate for specific date
      </NavLink> */}
      </div>
    </div>
  )
}

export default Header
