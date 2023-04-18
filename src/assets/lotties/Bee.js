import React from 'react'
import Lottie from "lottie-react";
import * as animationData from "./Bee.json";
import './bee.css'

export default function Bee() {

     const defaultOptions = {
       loop: true,
       autoplay: true,
       animationData: animationData.default,
       rendererSettings: {
         preserveAspectRatio: "xMidYMid slice",
       },
     };

  return (
   
      <section className="beeAnimation">
        <Lottie options={defaultOptions} height={200} width={200} />
      </section>
  
  );
}

