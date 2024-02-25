import React, { useState } from 'react'
import './Experience.css'
import Points from '../../assets/Img/points_colors.png'
import old_pc from '../../assets/Img/old_pc.png'

function Experience() {
  return (
    <section className="" id="experience">
      <div className="base-title">
        <div className="exp-title">
          <h1>Experiencias</h1>
        </div>
      </div>
      <div className="ItensExp space">
        <div>
          <div className="BoxExp">

            <div className="flex-exp-card">
              <div className="image-to-exp">
                <img src={old_pc} alt="" />
              </div>
              <div className="card-exp">
                <span>
                  <img src={Points} alt="points colors" />
                </span>
                <div>
                  <p>Analista de Desenvolvimento</p>
                  <p>TOTVS - Set de 2023 - Atual</p>
                  <button href="/">Mais detalhes</button>
                </div>
              </div>
            </div>


              <div className="Exp">
                  <p>2021-2021 </p>
                  <p>Controller LTDA</p>
                  <p>Atuei como auxiliar administrativo</p>
              </div>
              <div className="Exp">
                  <p>2021-2022 </p>
                  <p>Uceff</p>
                  <p>Atuei como auxiliar Administrativo/Web Designer/ Suporte para sistemas em gerais: Moodle, OpaSuite entre outros...</p>
              </div>
              <div className="Exp">
                  <p>2021-2021 </p>
                  <p>Elo Ideias</p>
                  <p>Atuei como Desenvolvedor Front-End, trabalhando como JS, Bootstrap, CSS3, Sass, html5</p>
              </div>
              <div className="Exp">
                  <p>2022-Atual </p>
                  <p>Atuando como Programador de Sistemas, onde se é trabalhado com fluxos nos sistemas MV 
                  software de gestão de saúde, rotinas de banco com Oracle DataBase.
                  </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;
