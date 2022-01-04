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
    <div>
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
        <div>
          <input
            type="radio"
            required
            name="gender"
            id="male"
            value="male"
            onClick={handleOnRadioGenderSelect}
          ></input>
          Male
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onClick={handleOnRadioGenderSelect}
          ></input>
          Female
          <input
            type="radio"
            name="gender"
            id="others"
            value="others"
            onClick={handleOnRadioGenderSelect}
          ></input>
          Others
        </div>

        <select onChange={handleOnSelect} required>
          <option value="English">English</option>
          <option value="Kannada">Kannada</option>
          <option value="Hindi">Hindi</option>
        </select>

        <Link to="/quizPage">
          <input type="submit" value={"Submit"} disabled={!isFormFill}></input>
        </Link>
      </form>
    </div>
  );
};

export default HomePage;
