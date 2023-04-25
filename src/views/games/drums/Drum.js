import React, { useEffect, useState } from "react";
import "./drum.scss";

function Drum({ sound, letter, title }) {
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(true);

    new Audio(sound).play();

    setTimeout(() => {
      setPlaying(false);
    }, 100);
  };
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      console.log("I hear you");
      if (e.key.toLowerCase() === letter.toLowerCase()) {
        play();
      }
    });
  });

  return (
    <div className={`drum ${playing ? "playing" : ""}`}>
      <div className="key" onClick={play}>
        {letter}
      </div>
      <div className="title">{title}</div>
    </div>
  );
}

export default Drum;
