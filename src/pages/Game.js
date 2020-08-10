import React, { useState } from "react";
import Chess from "chess.js";
import { Board, GameControls } from "../components";

import { useMainContext } from "../hooks";
import "../styles/Game.css";
const chess = new Chess();

const Game = (props) => {
  const { playerOneName, playerTwoName } = useMainContext();

  const [fen, setFen] = useState(chess.fen());

  return (
    <div className="Game-container">
      <div className="Game-control-bar"></div>
      <div className="Game-content">
        <GameControls chess={chess} setFen={setFen} />
        <div className="Game-board">
          <h2>{`Player #2: ${playerTwoName}`}</h2>
          <Board fen={fen} />
          <h2>{`Player #1: ${playerOneName}`}</h2>
        </div>
      </div>
    </div>
  );
};

export default Game;
