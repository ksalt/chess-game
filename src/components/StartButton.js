import React from "react";

const StartButton = ({ disabled, onClick }) => {
  return (
    <button className="Start-button" onClick={onClick} disabled={disabled}>
      Start game
    </button>
  );
};

export default StartButton;
