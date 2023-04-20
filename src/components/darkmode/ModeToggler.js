import React from 'react'
import { ReactComponent as Sun } from '../../assets/images/Sun.svg';
import { ReactComponent as Moon } from '../../assets/images/Moon.svg';
import './darkmode.scss'
import Header from '../header/Header';
import Footer from '../footer/Footer';

function ModeToggler({children}) {

    const setDarkMode = ()=> {
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
    }

    const toggleTheme = (e) => {
      if (e.target.checked) setDarkMode()
      else setLightMode();
    }

  return (
    <section className='layout'>
    
    <div className='dark_mode'>
        <input
            className='dark_mode_input'
            type='checkbox'
            id='darkmode-toggle'
            onChange={toggleTheme}
        />
        <label className='dark_mode_label' htmlFor='darkmode-toggle'>
            <Sun />
            <Moon />
        </label>

        <Header />
        <main>{children}</main>
        <Footer />
       
    </div>
    </section>
  )
}

export default ModeToggler