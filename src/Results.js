import React from "react";
import "./Results.css";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="text-uppercase"> {props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          if (index < 1) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          } else {
            return null;
          }
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
