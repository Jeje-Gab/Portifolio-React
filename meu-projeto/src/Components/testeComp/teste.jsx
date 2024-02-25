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
  const [active, setActive] = useState(null);
  const [y, setY] = useState(0);
  const articles = [
    'The spread operator',
    'Demystifying scopes',
    'JS or TS?',
    "ES2030, what's new",
    'NaN === NaN // false'
  ];

  const articleRefs = useRef([]); // Ref para armazenar as referências dos elementos

  const handleMouseOver = (index) => {
    setActive(index);
  };

  const handleMouseMove = (event) => {
    setY(event.clientY);
  };

  const calculateOpacity = (index, offset) => {
    return offset < 0 ? 0 : y / 200 - offset / (200 - index * 25);
  };

  const updateOpacity = () => {
    if (active !== null) {
      const offset = y - active * 25;
      const opacity = calculateOpacity(active, offset);
      document.querySelector(`.topic${active + 1}`).style.opacity = opacity;

      articleRefs.current.forEach((articleRef, articleIndex) => {
        if (articleIndex !== active) {
          articleRef.style.opacity = 0;
        } else {
          const articleOffset = y - articleIndex * 25;
          const articleOpacity = calculateOpacity(articleIndex, articleOffset);
          articleRef.style.opacity = articleOpacity;
        }
      });
    }
  };

  return (
    <section className="" id="skills">
      <div className="ItensSkills space">
      </div>

      <div className="phone" onMouseMove={handleMouseMove}>
        <div className="greeting">Welcome back!</div>
        <div className="tagline">Here's your topics for today by codeatnow</div>
        <div className="topics">
          {articles.map((article, index) => {
            const offset = y - index * 25;
            const opacity = active === index ? calculateOpacity(index, offset) : 0;

            return (
              <div
                key={index}
                className={`topic topic${index + 1} ${active === index ? 'active' : ''}`}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={() => handleMouseOver(null)}
              >
                <div className="topic-bg"></div>
                <div className="topic-title">
                  <span className={`topic-color topic-color${index + 1} ${active === index ? 'active' : ''}`}></span> {article}
                </div>
                <div className="topic-count">5 articles</div>
                <div className="articles">
                  {articles.map((article, articleIndex) => {
                    const articleOffset = y - articleIndex * 25;
                    const articleOpacity = active === index ? calculateOpacity(articleIndex, articleOffset) : 0;

                    return (
                      <div
                        key={articleIndex}
                        className={`article article${articleIndex + 1} ${active === index ? 'active' : ''}`}
                        style={{ opacity: articleOpacity }}
                      >
                        {article}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;