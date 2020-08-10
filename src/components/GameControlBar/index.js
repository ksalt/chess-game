import React from "react";
import { Button } from "../Inputs";
import "./GameControlBar.css";

const GameControlBar = ({ chess, setFen, lastMoves, setLastMove }) => {
  const onReset = () => {
    chess.reset();
    setLastMove([]);
    setFen(chess.fen());
  };

  const onPrevTurn = () => {
    lastMoves.push(chess.undo());
    setFen(chess.fen());
  };

  const onNextTurn = () => {
    chess.move(lastMoves.pop());
    setFen(chess.fen());
  };

  return (
    <div className="ControlBar-btn-block">
      <Button label="Reset" onClick={onReset} />
      <Button
        label="Prev. turn"
        onClick={onPrevTurn}
        disabled={!chess.history().length}
      />
      <Button
        label="Next turn"
        onClick={onNextTurn}
        disabled={!lastMoves.length}
      />
    </div>
  );
};

export default GameControlBar;
