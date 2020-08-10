import React, { useState } from "react";
import { useMainContext } from "../../hooks";
import { Button, TextField } from "../Inputs";
import "./GameControls.css";

const GameControls = ({ chess, setFen, lastMoves, setLastMove }) => {
  const { playerOneName, playerTwoName, setIsGameStarted } = useMainContext();
  const [currentTurn, setCurrentTurn] = useState("");

  const compareMoves = (move) => {
    const lastMove = lastMoves.length ? lastMoves[lastMoves.length - 1] : {};
    if (move.from !== lastMove.from || move.to !== lastMove.to) {
      setLastMove([]);
    } else {
      lastMoves.pop();
    }
  };

  const onMove = () => {
    const move = chess.move(currentTurn);
    if (!move) return;
    setFen(chess.fen());
    setCurrentTurn("");
    compareMoves(move);
  };

  const onRandomMove = () => {
    const moves = chess.moves();
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    const move = chess.move(randomMove);
    setFen(chess.fen());
    setCurrentTurn("");
    compareMoves(move);
  };

  const onStartAgain = () => {
    chess.reset();
    setIsGameStarted(false);
  };

  if (chess.game_over()) {
    return (
      <div className="Game-controls">
        <div className="Game-over">Game is over.</div>
        <Button label="Start again" onClick={onStartAgain} />
      </div>
    );
  }

  return (
    <div className="Game-controls">
      <TextField
        label={`${chess.turn() === "w" ? playerOneName : playerTwoName} turn`}
        value={currentTurn}
        onChange={setCurrentTurn}
      />
      <Button label="Submit" onClick={onMove} disabled={!currentTurn} />
      <Button label="Random" onClick={onRandomMove} />
    </div>
  );
};

export default GameControls;
