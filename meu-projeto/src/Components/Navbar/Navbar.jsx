import React, { useState } from 'react';

import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen)
  }

//Sections 


  return (
    <nav className="navbar">
      <ul className="navbar-nav mr-auto nav-ul">
        <li className="nav-item active">
          <a 
          data-scroll="home"
          href="#home"
          className="nav-link active">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a 
          data-scroll="home"
          href="#home"
          className="nav-link">
            Sobre
          </a>
        </li>
        <li className="nav-item">
          <a 
          data-scroll="experience"
          href="#experience"
          className="nav-link">
            Experiencia Profissional
          </a>
        </li>
        <li className="nav-item">
          <a 
          data-scroll="skills"
          href="#skills"
          className="nav-link">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a 
          data-scroll="college"
          href="#college"
          className="nav-link">
            Formação
          </a>
        </li>
        <li className="nav-item">
          <a 
          data-scroll="form"
          href="#form"
          className="nav-link">
            Contato
          </a>
        </li>
      </ul>
      
      
    </nav>
  )
}

export default Navbar;
