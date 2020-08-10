import React, { useState } from "react";
import { Start, Game } from "./pages";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  const onStart = (e) => {
    e.stopPropagation();
    setIsStarted(true);
  };

  return <>{isStarted ? <Game /> : <Start onStart={onStart} />}</>;
}

export default App;
