import React, { useState } from "react";
import Chess from "chess.js";
import { GameBoard, GameControls, GameControlBar } from "../components";
import "../styles/Game.css";

const chess = new Chess();

const Game = () => {
  const [fen, setFen] = useState(chess.fen());
  const [lastMoves, setLastMove] = useState([]);

  return (
    <div className="Game-container">
      <div className="Game-control-bar">
        <GameControlBar
          chess={chess}
          setFen={setFen}
          lastMoves={lastMoves}
          setLastMove={setLastMove}
        />
      </div>
      <div className="Game-content">
        <GameControls
          chess={chess}
          setFen={setFen}
          lastMoves={lastMoves}
          setLastMove={setLastMove}
        />
        <GameBoard chess={chess} fen={fen} />
      </div>
    </div>
  );
};

export default Game;
