import React from "react";

import "./home.scss";
import { Login } from "../login/Login";
// import BodyMod from "../../modols/body/BodyMod";
import Button from "../../modols/button/Button";

function Home() {
  return (
    <section className="home">
      <div className="top">
      </div>
      <div className="bottom">
      <Button title="take me home" />
      </div>
      </section>
      );
    }
    
    export default Home;
    // <BodyMod title="Home" body="this is where the body of home goes" />
// <div className='leftHome'>
//     <h1>WELCOME</h1>
//     <h3> to the MOM HIVE</h3>
//     <p>Where homeschooling community comes to life!</p>
// </div>

// <div className='rightHome'>
// <Login />

// </div>
