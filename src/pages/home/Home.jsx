import React from 'react'
import "./home.css"

const Home = () => {
      return (
            <div className='home'>
                  <h1>Welcome!</h1>
                  <p className='text-p'>My name is Jonathan Duran</p>
                  <div className="cards">
                        <div className="card-box">Projects</div>
                        <div className="card-box">About</div>
                        <div className="card-box">Contact</div>
                  </div>
            </div>
      )
}

export default Home
