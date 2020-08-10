import React from "react";

const Board = ({ fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR" }) => {
  return (
    <div>
      <img
        src={`http://www.fen-to-image.com/image/48/double/coords/${fen}`}
        alt="Chess board"
      />
    </div>
  );
};

export default Board;
