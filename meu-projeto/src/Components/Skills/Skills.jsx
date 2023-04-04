import React, { useState } from 'react'
import './Skills.css'
import JS from '../../assets/Img/JS.png'
import JSX from '../../assets/Img/React.png'
import { IoLogoJavascript } from 'react-icons/io5';
import { SiCss3 } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { IoLogoSass } from 'react-icons/io'
import { GrOracle } from 'react-icons/gr'

function Skills() {
  return (
    <div className="ItensSkills space">
      <div>
        <div className="BoxSkills">
          <div className="Skills JS">
            <IoLogoJavascript />
          </div>
          <div className="Skills CSS3">
            <SiCss3/>
          </div>
          <div className="Skills HTML5">
            <SiHtml5/>
          </div>
          <div className="Skills Sass">
            <IoLogoSass/>
          </div>
          <div className="Skills Oracle">
            <GrOracle />
          </div>
          <div className="Skills">.NET</div>
          <div className="Skills">PL/SQL</div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
