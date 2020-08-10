import React from "react";
import "../styles/Start.css";
import { StartButton, TextField } from "../components";
import { useMainContext } from "../hooks";

const Start = ({ onStart, setPlayerOneName, setPlayerTwoName }) => {
  const { playerOneName, playerTwoName } = useMainContext();

  return (
    <div className="Start-container">
      <div className="Start-content">
        <TextField
          label="Player #1 name"
          value={playerOneName}
          onChange={setPlayerOneName}
        />
        <TextField
          label="Player #2 name"
          value={playerTwoName}
          onChange={setPlayerTwoName}
        />
        <StartButton
          onClick={onStart}
          disabled={!(playerOneName && playerTwoName)}
        />
      </div>
    </div>
  );
};

export default Start;
