import React from "react";

import "./home.scss";
import { Login } from "../login/Login";

import Button from "../../modols/button/Button";
import MainMod from "../../modols/main/MainMod";
import ModeToggler from "../../components/darkmode/ModeToggler";
// import Layout from "../../components/layout/Layout";

function Home() {
  return (
   <ModeToggler>

      <section className="home">
        <div className="top">
          <MainMod title="Home" body="this is where the body of home goes" />
        </div>
        <div className="bottom">
        <Button title="take me home" />
        </div>
        </section>
    

    </ModeToggler>
      );
    }
    
    export default Home;
// <div className='leftHome'>
//     <h1>WELCOME</h1>
//     <h3> to the MOM HIVE</h3>
//     <p>Where homeschooling community comes to life!</p>
// </div>

// <div className='rightHome'>
// <Login />

// </div>
