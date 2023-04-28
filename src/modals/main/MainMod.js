import React from 'react'
import './mainMod.scss'

function MainMod({title, top, middle, bottom}) {
  return (
    <section className='mainModule'>
        <h1>{title}</h1>
        <p>{top}</p>
        <p>{middle}</p>
        <p>{bottom}</p>
    </section>
  )
}

export default MainMod