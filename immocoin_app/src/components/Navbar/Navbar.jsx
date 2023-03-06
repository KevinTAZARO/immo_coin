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
          Se Connecter
        </Link>
        <Link to="/register">
          S'inscrire
        </Link>
      </div>
    </div>
  )
}
