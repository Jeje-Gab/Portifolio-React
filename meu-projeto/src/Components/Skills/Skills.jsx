import React, { useState, useRef } from 'react';
import './Skills.css'
import { IoLogoJavascript } from 'react-icons/io5';
import { SiCss3 } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { IoLogoSass } from 'react-icons/io'
import { GrOracle } from 'react-icons/gr'
import { SiDotnet } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'


function Skills() {
  return (
    <section className="" id="skills">
      <div className="ItensSkills space">
        <div>
          <h1>Skills</h1>
          <div className="BoxSkills">
            <div className="Skills JS">
              <IoLogoJavascript />
            </div>
            <div className="Skills CSS3">
              <SiCss3 />
            </div>
            <div className="Skills HTML5">
              <SiHtml5 />
            </div>
            <div className="Skills Sass">
              <IoLogoSass />
            </div>
            <div className="Skills Oracle">
              <GrOracle />
            </div>
            <div className="Skills dotNET">
              <SiDotnet />
            </div>
            <div className="Skills mySQL">
              <SiMysql />
            </div>
            <div className="Skills CSharp">
              <span>C#</span>
              <TbBrandCSharp />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
