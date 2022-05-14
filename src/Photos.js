import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <a href={photo.src.original} target="_blank" rel="noreferrer">
              <img src={photo.src.tiny} alt="Landscape" key={index} />
            </a>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
