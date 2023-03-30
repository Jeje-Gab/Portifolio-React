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
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Sobre
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Experiencia Profissional
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Formação
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
