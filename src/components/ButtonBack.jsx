import React from 'react'
import { Link } from 'react-router-dom'

const style = {
      border: {
            borderRadius: '50%',
            height: '40px',
            width: '45px',
            background: '#fff',
            color: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
      },
      arrow: {
            color: '#000',
            fontSize: '23px'
      }
}

const ButtonBack = () => {
      return (
            <Link to='/'>
                  <div className='buttonBack'>
                        <div style={style.border}>
                              <i className="fas fa-arrow-left" style={style.arrow}></i>
                        </div>
                  </div>
            </Link>
      )
}

export default ButtonBack
