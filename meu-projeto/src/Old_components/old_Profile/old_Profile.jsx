import React, { useState } from 'react'
import './Profile.css'
import ProfileX from '../../assets/Img/profile.png'

function Profile() {
  return (
    <section className="" id="home">
      <div className="prof space">
        <div className="box">
          <div className="img-prof content">
            <img src={ProfileX} alt="a" />
          </div>
        </div>
        <div className="prof-items">
          <div className="prof-info">
            <h1>Gabriel de Jesus</h1>
            <h2>Chapecó - SC</h2>
            <p>Me chamo gabriel tenho 21 anos de idade, conheci a programação atravéz do IFSC, o qual me auxiliou em minhas primeiras experiencias profissionais</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile;
