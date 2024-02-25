import React, { useState } from 'react'
import './Profile.css'
import ProfileX from '../../assets/Img/profile_molde.png'
import Points from '../../assets/Img/points_colors.png'

function Profile() {
  return (
    <section className="sec-prof" id="home">
      <div className="prof space">
        <div className="image">
          <div className="image-bord">
            <img src={ProfileX} alt="profile" />
            <div className="card-yw">
              <span>
                <img src={Points} alt="points colors" />
              </span>
              <div>
                <p>Bem Vindo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="prof-items">
          <div className="prof-info">
            <h1>Dev. FullStack</h1>
            <p>
              Me chamo gabriel tenho 21 anos de idade, conheci a programação atravéz do IFSC, 
              o qual me auxiliou em minhas primeiras experiencias profissionais
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile;
