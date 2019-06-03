import React from "react";
import "../App.css";

const StarwarsCharacter = props => {
  return (
    <div className="characteristics">
      <figure className="title">
        <h1 className="Header">{props.character.name}</h1>
        <p className="individual">Height: {props.character.height}</p>
        <p className="individual">Year Born: {props.character.birth_year}</p>
      </figure>
    </div>
  );
};

export default StarwarsCharacter;
