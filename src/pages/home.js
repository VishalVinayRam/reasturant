import React from 'react'
import './home.css'

export default function Home
() {
  return (
    <center>
    <div>
    <div className="onboarding">
    <div className="slider">
      <div className="slide">
        <h1>Communicate</h1>
         <img src="https://s9.postimg.org/i65ness8f/chat-bubbles.png" alt="chat bubbles" /> 
        <div className="img chat-bubbles"></div>
        <p>Communicate with friends using a convenient chat</p>
      </div>
      <div className="slide">
        <h1>Mind Battles</h1>
         <img src="https://s9.postimg.org/7qzh5k2nz/swords.png" alt="swords" /> 
        <div className="img swords"></div>
        <p>Fight with other players in daily intellectual battles</p>
      </div>
      <div className="slide">
        <h1>Learn</h1>
         <img src="https://s9.postimg.org/l7wfosv3j/brain-bulb.png" alt="brain bulb" /> 
        <div className="img brain-bulb"></div>
        <p>Perform tasks, get cool bonuses, ranks and awards</p>
      </div>
    </div>
    <div className="controls">
      <form>
        <input type="radio" name="page" checked />
        <label for="page"></label>
        <input type="radio" name="page"/>
        <label for="page"></label>
        <input type="radio" name="page"/>
        <label for="page"></label>
      </form>
      <a href="#" className="btn-next">Next</a>
    </div>
  </div>
  </div>
  </center>
  )
}
