import React, { useState } from "react";
import { useMainContext } from "../../hooks";
import { Button, TextField } from "../Inputs";
import "./GameControls.css";

const GameControls = ({ chess, setFen }) => {
  const { playerOneName, playerTwoName } = useMainContext();
  const [currentTurn, setCurrentTurn] = useState("");

  const onMove = () => {
    const move = chess.move(currentTurn);
    if (!move) return;
    setFen(chess.fen());
    setCurrentTurn("");
  };

  return (
    <div className="Game-controls">
      <TextField
        label={`${chess.turn() === "w" ? playerOneName : playerTwoName} turn`}
        value={currentTurn}
        onChange={setCurrentTurn}
      />
      <Button label="Submit" onClick={onMove} />
    </div>
  );
};

export default GameControls;
