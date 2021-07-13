/* eslint-disable no-restricted-globals */
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const CharacterItem = ({ character }) => {
  return (
    <Card style={{ margin: 10, maxWidth: "20rem" }}>
      <CardContent>
        <h2>{character.name}</h2>
        <img
          src={character.image.url}
          alt={character.name}
          style={{ maxWidth: "100%" }}
        />
        <div>publisher: {character.biography.publisher}</div>
        {/* Can't use the dot notation syntax for "full-name" because 'name' is deprecated */}
        <div>
          full-name:{" "}
          {character.biography["full-name"]
            ? character.biography["full-name"]
            : "n/a"}
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterItem;
