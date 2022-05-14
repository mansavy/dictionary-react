import React from "react";

export default function Phonetic(props) {
  function sound() {
    let audio = document.getElementById("audio");
    audio.load();
    audio.play();
  }

  if (props.phonetic.audio) {
    return (
      <div className="Phonetic ms-2">
        {props.phonetic.text}
        <audio id="audio">
          <source src={props.phonetic.audio} type="audio/mp3" />
        </audio>
        <i onClick={sound} class="fa-solid fa-play  ms-3 mb-2"></i>
      </div>
    );
  } else {
    return null;
  }
}
