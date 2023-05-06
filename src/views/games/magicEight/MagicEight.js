import React, { useState } from "react";
import "./magicEight.scss";
import ModeToggler from "../../../components/darkmode/ModeToggler";

function MagicEight() {
  const answers = [
    "It is certain",
    "It is decidedly so",
    "Reply hazy try again",
    "Cannot predict now",
    "Do not count on it",
    "My sources say no",
    "Outlook not so good",
    "Signs point to yes",
  ];

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAnswer = (e) => {
    e.preventDefault();
    if (!question) {
      return;
    }
    const index = Math.floor(Math.random() * answers.length);
    setAnswer(answers[index]);
  };

  return (
<ModeToggler title="MAGIC EIGHT BALL">

<section className="magicEight">
  <form className="magic" onSubmit={getAnswer}>
    <div className="question">
      <input
        value={question}
        placeholder={"Ask a yes/no question - letters only"}
        pattern="/^[A-Za-z\_\-]*$/"
        onChange={(e) => setQuestion(e.target.value)}
      />
      <div className="circle">
        <p>{answer}</p>
        <button className="magicbut" type="submit"></button>
      </div>
    </div>
  </form>
</section>
</ModeToggler>

  );
}

export default MagicEight;
