import React, { useState } from 'react'
import './Profile.css'
import ProfileX from '../../assets/Img/profile.png'

function Profile() {
  return (
    <div className="prof">
      <div className="img-prof">
        <img src={ProfileX} alt="a" />
      </div>
      <div className="prof-items">
        <div className="prof-info">
          <h1>Gabriel de Jesus</h1>
          <h2>Chapecó - SC</h2>
        </div>
      </div>
    </div>
  )
}

export default Profile;
