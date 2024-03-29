import React, { useState } from "react";
import { Start, Game } from "./pages";
import { MainContext } from "./contexts";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playerOneName, setPlayerOneName] = useState("User 1");
  const [playerTwoName, setPlayerTwoName] = useState("User 2");

  const onStart = (e) => {
    e.stopPropagation();
    setIsGameStarted(true);
  };

  const mainContextState = {
    playerOneName,
    playerTwoName,
    setIsGameStarted,
  };

  return (
    <MainContext.Provider value={mainContextState}>
      {isGameStarted ? (
        <Game />
      ) : (
        <Start
          onStart={onStart}
          setPlayerOneName={setPlayerOneName}
          setPlayerTwoName={setPlayerTwoName}
        />
      )}
    </MainContext.Provider>
  );
}

export default App;
