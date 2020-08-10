import React, { useState } from "react";
import "../styles/Start.css";
import { StartButton } from "../components";
import { TextField } from "../components/Inputs";

const Start = (props) => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  return (
    <div className="Start-container">
      <div className="Start-content">
        <TextField label="Player #1 name" value={name1} onChange={setName1} />
        <TextField label="Player #2 name" value={name2} onChange={setName2} />
        <StartButton onClick={props.onStart} disabled={!(name1 && name2)} />
      </div>
    </div>
  );
};

export default Start;
