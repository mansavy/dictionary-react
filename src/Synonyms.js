import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonyms, index) {
          return (
            <span key={index} className="Synonym">
              {" "}
              {synonyms}
            </span>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
