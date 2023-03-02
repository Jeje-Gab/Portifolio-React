import React, { useState } from 'react'
import './Nav.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <ul className="navbar-nav mr-auto nav-ul">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
