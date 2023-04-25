import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";

import drum from '../../assets/images/drum.png'
import eight from '../../assets/images/eight-ball.png'

import "./game.scss";
import ModeToggler from "../../components/darkmode/ModeToggler";


function Games() {
  return (
    <ModeToggler>
    
    <div className="game">
    <ul>
      <li>
        <img src={drum} alt="drum icon"/>
        <Link to="/playingdrums">Playing Drums</Link>
      </li>
      <li>
        <img src={eight} alt="magic eight ball"/>
        <Link to="/magiceight">Magic Eight Ball</Link>
      </li>



    </ul>
 
    </div>
    </ModeToggler>
    
  );
}

export default Games;
