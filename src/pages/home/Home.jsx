import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

const Home = () => {
      return (
            <div className='home'>
                  <h1>Welcome!</h1>
                  <p className='text-p'>My name is Jonathan Duran</p>
                  <div className="cards">
                        <div className="card-box">
                              <Link className='link'  to="projects">Projects</Link>
                        </div>
                        <div className="card-box">
                              <Link className='link'  to="about">About</Link>
                        </div>
                        <div className="card-box">
                              <Link className='link'  to="contact">Contact</Link>
                        </div>
                  </div>
            </div>
      )
}

export default Home
