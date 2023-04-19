import React from 'react'
import Nav from '../nav/Nav'

function Header({title}) {

  return (
    <section className='header'>
      <Nav />
      <h1>{title}</h1>
    </section>
  )
}

export default Header