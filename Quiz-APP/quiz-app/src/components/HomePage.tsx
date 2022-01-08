import { style } from "@mui/system";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = ({
  handleInputName,
  handleOnRadioGenderSelect,
  handleOnSelect,
  isFormFill,

  gender,
  selectedLaguage,
  inpuName,
}: any) => {
  return (
    <div className={s.inputHomePage}>
      <h1>Quiz</h1>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          console.log("submited");
        }}
      >
        <input
          type="text"
          placeholder="Name"
          onChange={handleInputName}
          value={inpuName}
          required
          className={s.a}
        ></input>
        <br></br>
        <div>
          Select Gender :{" "}
          <select value={gender} onChange={handleOnRadioGenderSelect} required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        Selcet Language:{" "}
        <select value={selectedLaguage} onChange={handleOnSelect} required>
          <option value="English">English</option>
          <option value="Kannada">Kannada</option>
          <option value="Hindi">Hindi</option>
        </select>
        <br></br>
        <Link to="/quizPage">
          <input type="submit" value={"Submit"} disabled={!isFormFill}></input>
        </Link>
      </form>
    </div>
  );
};

export default HomePage;
