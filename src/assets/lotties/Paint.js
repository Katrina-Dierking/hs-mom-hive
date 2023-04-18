import React from 'react'
import Lottie from "lottie-react";
import * as animationData from './swirlingPaint.json'

export default function Paint() {

            const defaultOptions = {
              loop: true,
              autoplay: true,
              animationData: animationData.default,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            };

  return (
    <section className='paintAnim'>
        <Lottie options={defaultOptions} height={200} width={200} />
    </section>
  )
}

