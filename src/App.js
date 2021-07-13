import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CharacterGrid from "./components/CharacterGrid";
import token from "./token";

function App() {
  const [characters, setCharacters] = useState("");
  const [query, setQuery] = useState("batman");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://superheroapi.com/api/${token}/search/${query}`
      );

      setCharacters(result.data.results);
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
        style={{ marginTop: 10 }}
      />

      {characters ? (
        <CharacterGrid characters={characters} />
      ) : (
        <h2>unable to find matching characters. Please refine your search.</h2>
      )}
    </div>
  );
}

export default App;
