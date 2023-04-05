import React, { useState } from 'react'
import './Form.css'

function Form() {
  return (
    <div className="ItensForm space">
      <form action="">
        <div className="titleForm">
          <h1>Contate-me</h1>
        </div>
        <div>
          <span></span>
          <input type="text" />
        </div>
        <div>
          <span></span>
          <input type="text" />
        </div>
        <div>
          <span></span>
          <input type="text" />
        </div>
        <div>
          <span></span>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </form>
    </div>
  )
}

export default Form;
