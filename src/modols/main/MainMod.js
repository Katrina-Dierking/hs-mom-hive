import React from 'react'
import './mainMod.scss'

function MainMod({title, body}) {
  return (
    <section className='mainModule'>
        <h1>{title}</h1>
        <p>{body}</p>
    </section>
  )
}

export default MainMod