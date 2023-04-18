import React, {useRef, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './login.scss'
import Dashboard from '../dashboard/Dashboard'
// import Bee from '../../assets/lotties/Bee'



export const Login = () => {

  const userName=useRef()
  const email=useRef()
  const password=useRef()

  const [ showHome, setShowHome] = useState(false)
  const [show, setShow] = useState(false)


  const localSignUp = localStorage.getItem("signUp")
  const localEmail=localStorage.getItem('email')
  const localPassword=localStorage.getItem('password')
  const localUserName = localStorage.getItem('userName')


  useEffect(()=> {
    if(localSignUp) {
      setShowHome(true)
    }
    if(localEmail) {
      setShow(true)
    }

  }, [localSignUp, localEmail])



  const handleClick = (e) => {
    e.preventDefault()

    
    if(userName.current.value &&
      email.current.value &&
      password.current.value) {


        localStorage.setItem("userName", userName.current.value);
        localStorage.setItem("email", email.current.value);
        localStorage.setItem("password", password.current.value);
        localStorage.setItem("signUp", email.current.value);
        
        alert("Account created successfully")
        window.location.reload()
      }
  }

const handleLogin=(e)=> {
  e.preventDefault()

    
    if( email.current.value === localEmail && password.current.value === localPassword) {
        localStorage.setItem("signUp", email.current.value);
        window.location.reload()
      } else {
        alert("Please enter valid credentials")
      }
  }


  return (
    <>
      <section className="loginContainer">
    
        {showHome ? (
          <Dashboard />
        ) : show ? (
          <div className="container">
            <h3 className="loginWelcom">Welcome back, {localUserName}</h3>
            <div className="input_space">
              <input placeholder="Email" type="text" ref={email} />
            </div>
            <div className="input_space">
              <input placeholder="Password" type="password" ref={password} />
            </div>
            <Link to="/dashboard">
              <button onClick={handleLogin}>Sign In</button>
            </Link>
          </div>
        ) : (
          <div className="container">
            <div className="input_space">
              <input placeholder="Name" type="text" ref={userName} />
            </div>
            <div className="input_space">
              <input placeholder="Email" type="text" ref={email} />
            </div>
            <div className="input_space">
              <input placeholder="Password" type="password" ref={password} />
            </div>
            <button onClick={handleClick}>Sign Up</button>
          </div>
        )}
      </section>
    </>
  );
}
