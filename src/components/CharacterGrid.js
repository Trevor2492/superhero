import React from "react";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ characters }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character}></CharacterItem>
      ))}
    </div>
  );
};

export default CharacterGrid;
