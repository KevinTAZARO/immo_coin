import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to="/"> 
          ImmoCoin
        </Link>
      </div>
      <div className='authentication'>
        <Link to="/login">
        se connecter
        </Link>
        <Link to="/register">
          s'enregister
        </Link>
      </div>
    </div>
  )
}
