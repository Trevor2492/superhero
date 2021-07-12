import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

function App() {
  const [character, setCharacter] = useState("");
  const [query, setQuery] = useState("ironman");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://superheroapi.com/api/10225131195777441/search/${query}`
      );

      setCharacter(result.data.results);
      console.log(result.data.results);
    };

    fetchData();
  }, [query]);

  return (
    <div className="App">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div>{character.name}</div>

      {/* <CharacterCard character={character} /> */}
    </div>
  );
}

export default App;
