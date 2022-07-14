import React from 'react'
import { Link } from 'react-router-dom'

import NavLinkX from './NavLinkX'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo-wrapper">
        <div className="logo">
          <Link to="/">FullStack Blog</Link>
        </div>
      </div>
      <div className="nav">
        <NavLinkX to="/users" activeClassName='active'>Users</NavLinkX>
        <NavLinkX to="/posts" activeClassName='active'>Posts</NavLinkX>
      </div>
    </div>
  )
}
