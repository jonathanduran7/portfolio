import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';
import ParticleBackground from '../../ParticleBackground';
import "./home.css"

const Home = () => {
           
      return (
            <div className='home'>
                  <div className='particleBack'>
                        <ParticleBackground/>
                  </div>

                  <div className='home-content'>
                        <h1>Welcome!</h1>
                        <div className='text-p'>
                        <Typewriter 
                              options={{
                                    strings: ['My name is Jonathan', "I'm programming"],
                                    autoStart: true,
                                    loop: true
                              }}
                              />
                        </div>
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
            </div>
      )
}

export default Home
