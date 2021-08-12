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
      {characters.map((character) =>
        // Line 16 is a hacky way to avoid displaying characters whose image URL is broken
        character.powerstats.speed !== "null" ? (
          <CharacterItem
            key={character.id}
            character={character}
          ></CharacterItem>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default CharacterGrid;
