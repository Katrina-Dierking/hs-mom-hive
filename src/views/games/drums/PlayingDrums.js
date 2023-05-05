import React, { useState } from "react";
import Drum from "./Drum";
import "./drum.scss";
import Layout from "../../../components/layout/Layout";

import boom from "./sounds/boom.wav";
import clap from "./sounds/clap.wav";
import hihat from "./sounds/hihat.wav";
import kick from "./sounds/kick.wav";
import openhat from "./sounds/openhat.wav";
import ride from "./sounds/ride.wav";
import snare from "./sounds/snare.wav";
import tink from "./sounds/tink.wav";
import tom from "./sounds/tom.wav";

function PlayingDrums() {
  const [sounds] = useState([
    {
      name: "boom",
      sound: boom,
      key: "A",
      title: "BOOM",
    },
    {
      name: "clap",
      sound: clap,
      key: "S",
      title: "CLAP",
    },
    {
      name: "hihat",
      sound: hihat,
      key: "D",
      title: "HIHAT",
    },
    {
      name: "kick",
      sound: kick,
      key: "F",
      title: "KICK",
    },
    {
      name: "openhat",
      sound: openhat,
      key: "G",
      title: "OPENHAT",
    },
    {
      name: "ride",
      sound: ride,
      key: "H",
      title: "RIDE",
    },
    {
      name: "snare",
      sound: snare,
      key: "J",
      title: "SNARE",
    },
    {
      name: "tink",
      sound: tink,
      key: "K",
      title: "TINK",
    },
    {
      name: "tom",
      sound: tom,
      key: "L",
      title: "TOM",
    },
  ]);
  return (
    <Layout>
      <section className="playingDrums">
        <h1>Become a rockstar drummer!</h1>
        <div className="drums">
          {sounds.map((sound, i) => (
            <Drum
              key={i}
              letter={sound.key}
              sound={sound.sound}
              title={sound.title}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default PlayingDrums;
