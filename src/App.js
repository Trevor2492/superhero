import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CharacterGrid from "./components/CharacterGrid";
import token from "./token";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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

  const useStyles = makeStyles((theme) => ({
    popover: {
      pointerEvents: "none",
    },
    paper: {
      padding: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="App">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginTop: 10 }}
      />

      <div style={{ position: "absolute", right: 20, top: 20 }}>
        <InfoOutlinedIcon />
      </div>

      <div>
        <Typography
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          Hover with a Popover.
        </Typography>
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography>I use Popover.</Typography>
        </Popover>
      </div>

      {characters ? (
        <CharacterGrid characters={characters} />
      ) : (
        <h2>Unable to find matching characters. Please refine your search.</h2>
      )}
    </div>
  );
}

export default App;
