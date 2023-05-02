import React from "react";

import "./home.scss";

import Button from "../../modals/button/Button";
import MainMod from "../../modals/main/MainMod";
import ModeToggler from "../../components/darkmode/ModeToggler";

function Home() {
  return (
   <ModeToggler>

      <section className="home">
        <div className="top">
          <MainMod title="HOME" 
          
          top="this is where the body of home goes.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae minima, commodi vitae tempore temporibus dolorum quod fugiat, omnis eligendi voluptates, dolores similique eum numquam est eos perspiciatis laudantium quo vero.
          
          what is going on?"
            />
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
