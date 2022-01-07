import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import QuizPage from "./components/QuizPage";
import data from "./components/LanguageData";

function App() {
  const [inpuName, setInputName] = useState("");
  const [gender, setGender] = useState("Male");
  const [selectedLaguage, setSelectedLaguage] = useState("English");
  const [isFormFill, setIsFormFill] = useState(false);

  const [finalResultTotal, setFinalResultTotal] = useState<any>(0);

  const handleInputName = (e: any) => {
    // console.log(e.target.value);
    setInputName(e.target.value);
  };

  const handleOnRadioGenderSelect = (e: any) => {
    // console.log(e.target.value);
    setGender(e.target.value);
  };
  const handleOnSelect = (e: any) => {
    // console.log(e.target.value, "fsdf");
    setSelectedLaguage(e.target.value);
  };
  useEffect(() => {
    if (gender != "" && selectedLaguage != "" && inpuName != "") {
      // console.log(gender, selectedLaguage, inpuName);
      setIsFormFill(true);
    } else {
      setIsFormFill(false);
    }
  }, [gender, selectedLaguage, inpuName]);
  return (
    <BrowserRouter>
      <>APp</>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              handleInputName={handleInputName}
              handleOnRadioGenderSelect={handleOnRadioGenderSelect}
              handleOnSelect={handleOnSelect}
              selectedLaguage={selectedLaguage}
              isFormFill={isFormFill}
              setIsFormFill={setIsFormFill}
              gender={gender}
              inpuName={inpuName}
            ></HomePage>
          }
        ></Route>
        <Route
          path="/quizPage"
          element={
            <QuizPage
              selectedLaguage={selectedLaguage}
              data={data}
              finalResultTotal={finalResultTotal}
              setFinalResultTotal={setFinalResultTotal}
            ></QuizPage>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
