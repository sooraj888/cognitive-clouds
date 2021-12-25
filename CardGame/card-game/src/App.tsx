import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [isGameSceen, setIsGameSceen] = useState(false);
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [enteredNumber, setEnterdNumber] = useState<number>(NaN);

  

  const handleOnInputFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("submited");
    setIsGameSceen(true);
  };

  const handleOnNumberChange = (e: any) => {
    setEnterdNumber(parseInt(e.target.value));
  };
  const handleOnNameChange = (e: any) => {
    setPlayerName(e.target.value);
  };
  const handleExitOnClick = () => {
    setIsGameSceen(false);
    setPlayerName("");
    setEnterdNumber(NaN);
  };

  return (
    <div className="App">
      {!isGameSceen ? (
        <div>
          <h1>Card game</h1>
          <form onSubmit={handleOnInputFormSubmit}>
            <input
              value={playerName}
              type="text"
              autoComplete="on"
              onChange={handleOnNameChange}
              placeholder="Enter your name"
              required
            ></input>
            <br></br>
            <input
              value={enteredNumber || ""}
              type="number"
              onChange={handleOnNumberChange}
              required
              autoComplete="off"
              placeholder="Enter a number between 1 to 9"
              min="1"
              max="9"
            ></input>
            <br />
            <button type="submit">Start</button>
          </form>
        </div>
      ) : (
        <div>
          {playerName}
          {enteredNumber}
          {!isGameEnd ? (
            <></>
          ) : (
            <>
              <button>Retry</button>
              <button onClick={handleExitOnClick}>Exit</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
