import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [isGameSceen, setIsGameSceen] = useState(false);
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [enteredNumber, setEnterdNumber] = useState<number>(NaN);
  const [cards, setCards] = useState<any>([]);
  const [cliclCount, setClickCount] = useState<number>(0);
  const [isDisable, setDisable] = useState<boolean>(false);
  const [message, setMessage] = useState("");

  const arrayOfCards: any = [];
  const randomNumberCollector: any = [];

  useEffect(() => {
    if (cliclCount > 2) {
      setDisable(true);
      setIsGameEnd(true);
      if (message != "You Won ...") {
        setMessage("You Lost the game");
      }
    }
  }, [cliclCount]);

  let randomNumber: number = 0;

  const checkingRondomNumber = (randomNumber: number) => {
    let foundSameNumber = false;
    for (let k = 0; k < randomNumberCollector.length; k++) {
      if (randomNumberCollector[k] === randomNumber) {
        foundSameNumber = true;
      }
    }
    if (foundSameNumber) {
      return false;
    } else {
      return true;
    }
  };

  const genrateRandomArray = () => {
    for (let i = 0; i < 9; i++) {
      do {
        randomNumber = Math.floor(Math.random() * 9) + 1;
      } while (!checkingRondomNumber(randomNumber));

      randomNumberCollector[i] = randomNumber;

      arrayOfCards[i] = {
        id: i + 1,
        className: "grayCard",
        randomNumber: randomNumber,
      };
    }
    setCards(arrayOfCards);

    //random number array
    console.log("randomNumberCollector", randomNumberCollector);
  };

  const handleOnInputFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("submited");
    setIsGameSceen(true);
    genrateRandomArray();
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
    setClickCount(0);
    setDisable(false);
    setMessage("");
    setIsGameEnd(false);
  };
  const handleOnRetry = () => {
    console.log("Retry button clicked");
    setClickCount(0);
    setDisable(false);
    setMessage("");
    genrateRandomArray();
    setIsGameEnd(false);
  };

  const handleColorChange = (id: any) => {
    setClickCount(cliclCount + 1);
    console.log("clicked");
    console.log(id);
    const updatedValue = cards.map((item: any) => {
      if (item.randomNumber === id) {
        if (item.randomNumber === enteredNumber) {
          setDisable(true);
          setMessage("You Won ...");
          setIsGameEnd(true);
          return { ...item, className: "greenCard" };
        } else {
          return { ...item, className: "redCard" };
        }
      } else {
        return item;
      }
    });

    setCards(updatedValue);
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
              autoFocus={true}
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
          <>
            <h1 className={message == "You Won ..." ? "win" : "lost"}>
              {message}
            </h1>

            <h2>Click Count :{cliclCount}</h2>
            <h5>player Name : {playerName}</h5>
            <h5>Entered Number : {enteredNumber}</h5>
            <br></br>
            <hr></hr>
            {cards.map((cardItem: any) => {
              return (
                <button
                  className={cardItem.className}
                  key={cardItem.id}
                  onClick={() => handleColorChange(cardItem.randomNumber)}
                  disabled={isDisable}
                >
                  {cardItem.randomNumber}
                </button>
              );
            })}
          </>
          <br></br>
          {!isGameEnd ? (
            <></>
          ) : (
            <>
              <br></br>
              <button className="btn" onClick={handleOnRetry}>
                Retry
              </button>
              <button className="btn" onClick={handleExitOnClick}>
                Exit
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
