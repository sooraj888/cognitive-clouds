import React from "react";
import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [searchtearm, setSearchTearm] = useState("aa");

  const handleSearch = (e: any) => {
    console.log(e.target.value);
    setSearchTearm(e.target.value);
  };

  return (
    <div className="App">
      <input value={searchtearm} onChange={handleSearch} type="text"></input>
    </div>
  );
}

export default App;
