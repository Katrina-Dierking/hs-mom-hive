import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './layout.scss'

function Layout({children}) {
  return (
   <section className='layout'>
        <Header />
            <main>{children}</main>
        <Footer />
   </section>
  )
}

export default Layout