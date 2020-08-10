import React from "react";
import { useMainContext } from "../../hooks";
import "./GameBoard.css";

const Board = ({
  chess,
  fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
}) => {
  const { playerOneName, playerTwoName } = useMainContext();

  const renderInCheck = (player) => {
    return (
      <div className="Game-in-check">
        {chess.turn() === player && chess.in_check() ? "In check" : ""}
      </div>
    );
  };

  return (
    <div className="Game-board">
      {renderInCheck("b")}
      <h2>{`Player #2: ${playerTwoName}`}</h2>
      <img
        src={`http://www.fen-to-image.com/image/48/double/coords/${fen}`}
        alt="Chess board"
      />
      <h2>{`Player #1: ${playerOneName}`}</h2>
      {renderInCheck("w")}
    </div>
  );
};

export default Board;
