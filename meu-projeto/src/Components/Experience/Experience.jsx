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

            <div className="flex-exp-card">
              <div className="card-exp">
                <span>
                  <img src={Points} alt="points colors" />
                </span>
                <div>
                  <p>Programador de Sistemas</p>
                  <p>Unimed - Jun de 2022 - Out de 2023</p>
                  <button href="/">Mais detalhes</button>
                </div>
              </div>
              <div className="image-to-exp">
                <img src={old_pc} alt="" />
              </div>
            </div>

            <div className="flex-exp-card">
              <div className="image-to-exp">
                <img src={old_pc} alt="" />
              </div>
              <div className="card-exp">
                <span>
                  <img src={Points} alt="points colors" />
                </span>
                <div>
                  <p>Desenvolvedor Web Junior</p>
                  <p>Elo Ideias - Ago de 2021 - Jun de 2022</p>
                  <button href="/">Mais detalhes</button>
                </div>
              </div>
            </div>

            <div className="flex-exp-card">
              <div className="card-exp">
                <span>
                  <img src={Points} alt="points colors" />
                </span>
                <div>
                  <p>Analista de Suporte</p>
                  <p>UCEFF - Out de 2020 - Ago de 2021</p>
                  <button href="/">Mais detalhes</button>
                </div>
              </div>
              <div className="image-to-exp">
                <img src={old_pc} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;
