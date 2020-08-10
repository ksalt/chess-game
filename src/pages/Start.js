import React from "react";
import "../styles/Start.css";
import { StartButton } from "../components";
import { TextField } from "../components/Inputs";
import { useMainContext } from "../hooks";

const Start = () => {
  const {
    onStart,
    playerOneName,
    setPlayerOneName,
    playerTwoName,
    setPlayerTwoName,
  } = useMainContext();

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
