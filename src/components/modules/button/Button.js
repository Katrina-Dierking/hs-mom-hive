import React from 'react'
import './button.scss'

function Button({title, color}) {

    const clickHandler = () => {
        console.log('clicked')
    }
  return (
    <div className='btn'>
        <button onClick={clickHandler}>
            {title}
        </button>
    </div>
  )
}

export default Button