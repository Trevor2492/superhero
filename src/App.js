import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CharacterGrid from "./components/CharacterGrid";
import token from "./token";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CORS from "./components/CORS.png";

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

  const handlePopoverOpen = (e) => {
    setAnchorEl(e.currentTarget);
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
        onChange={(e) => setTimeout(setQuery(e.target.value), 3000)}
        style={{
          position: "sticky",
          top: 10,
          marginTop: 10,
          outline: "none",
          height: "30px",
          fontSize: "25px",
          border: "1px solid darkgray",
          borderRadius: 6,
        }}
      />

      {/* Displays helpful information when mousover the 'info' icon */}
      <div style={{ position: "absolute", right: 20, top: 20 }}>
        <InfoOutlinedIcon
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        />
      </div>

      <div>
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
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography>
            You must search for a character. <br /> The superhero API doesn't
            have an endpoint <br /> to display all characters by default.
            <br /> <br />
            If you're using Safari, you must disable cross-origin restrictions
            by going to <br />
            "Develop" then "Disable Cross-Origin Restrictions" then refresh the
            page.
            <br />
            <br />
            In Chrome you can download the extension: "Allow CORS:
            Access-Control-Allow-Origin" and enable it.
            <br />
            <br />
            <img
              src={CORS}
              alt="CORS Chrome Extension"
              style={{ width: 550 }}
            />
          </Typography>
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
