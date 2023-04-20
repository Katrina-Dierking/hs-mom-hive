import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './layout.scss'
import ModeToggler from '../darkmode/ModeToggler'

function Layout({children}) {
  return (
   <section className='layout'>
        <Header />
        <ModeToggler />
          <main>{children}</main>
        
        
            
        <Footer />
   </section>
  )
}

export default Layout