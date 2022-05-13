import React from "react";

export default function Phonetic(props) {
  function sound() {
    let audio = document.getElementById("audio");
    audio.load();
    audio.play();
  }

  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        {props.phonetic.text} <br />
        <audio id="audio">
          <source src={props.phonetic.audio} type="audio/mp3" />
        </audio>
        <button onClick={sound} className="btn btn-primary"></button>
      </div>
    );
  } else {
    return null;
  }
}
