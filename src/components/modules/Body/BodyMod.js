import React from 'react'
import './bodyMod.scss'

function BodyMod({title, body}) {
  return (
    <section className='bodyModule'>
        <h1>{title}</h1>
        <p>{body}</p>
    </section>
  )
}

export default BodyMod