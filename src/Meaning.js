import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="ms-1 me-1">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <ul key={index}>
            <li>
              {index + 1}. {definition.definition}
            </li>

            <em>{definition.example}</em>

            <strong>
              <Synonyms synonyms={definition.synonyms} />
            </strong>
          </ul>
        );
      })}
    </div>
  );
}
