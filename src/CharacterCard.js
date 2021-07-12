import React from "react";

const CharacterCard = ({ character }) => {
  return <div>{character.map((character) => character.name)}</div>;
};

export default CharacterCard;
