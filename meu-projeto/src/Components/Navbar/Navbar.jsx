import React, { useState } from 'react';

import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <ul className="navbar-nav mr-auto nav-ul">
        <li className="nav-item active">
          <a 
          data-scroll="home"
          className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#sec2">
            Sobre
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#sec3">
            Experiencia Profissional
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#sec4">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#sec5">
            Formação
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#sec6">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
