/* eslint-disable no-restricted-globals */
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const CharacterItem = ({ character }) => {
  return (
    <Card
      elevation={3}
      style={{ margin: 10, maxWidth: "20rem", borderRadius: 10 }}
    >
      <CardContent>
        <h2>{character.name}</h2>
        <img
          src={character.image.url}
          alt={character.name}
          style={{ maxWidth: "100%", borderRadius: 10 }}
        />

        <div style={{ textAlign: "left" }}>
          <h4>Biography: </h4>
          <div>Publisher: {character.biography.publisher}</div>
          {/* Can't use the dot notation syntax for "full-name" because 'name' is deprecated */}
          <div>
            Full-name:{" "}
            {character.biography["full-name"]
              ? character.biography["full-name"]
              : "n/a"}
          </div>

          <div>Place of Birth: {character.biography["place-of-birth"]}</div>
          <div>
            First Appearance:{" "}
            {character.biography["first-appearance"].length > 30
              ? character.biography["first-appearance"].slice(0, 30) + "..."
              : character.biography["first-appearance"]}
          </div>
          <div>Occupation: {character.work.occupation}</div>

          <h4>Appearance: </h4>
          <div>Gender: {character.appearance.gender}</div>
          <div>Race: {character.appearance.race}</div>
          <div>Height: {character.appearance.height[0]}</div>
          <div>Weight: {character.appearance.weight[0]}</div>
          <div>Eye Color: {character.appearance["eye-color"]}</div>
          <div>Hair Color: {character.appearance["hair-color"]}</div>

          <h4>Stats: </h4>
          <div>Speed: {character.powerstats.speed}</div>
          <div>Intelligence: {character.powerstats.intelligence}</div>
          <div>Strength: {character.powerstats.strength}</div>
          <div>Durability: {character.powerstats.durability}</div>
          <div>Power: {character.powerstats.power}</div>
          <div>Combat: {character.powerstats.combat}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterItem;
