import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import renderer from "react-test-renderer";

import HomePage from "./components/HomePage";
import QusionOne from "./components/QuesionComponents/QusionOne";
import data from "./components/LanguageData";

import { BrowserRouter } from "react-router-dom";
import { Female } from "@mui/icons-material";
import QusionTwo from "./components/QuesionComponents/QusionTwo";

cleanup();
test("test on rendering  input HomePage without sending dummyprop ", () => {
  render(
    <BrowserRouter>
      <HomePage></HomePage>
    </BrowserRouter>
  );
  const textValue = screen.getByText(/quiz/i);
  expect(textValue).toBeInTheDocument();

  fireEvent.change(screen.getAllByDisplayValue("")[0], {
    target: { value: "sooraj" },
  });
  expect(screen.getByDisplayValue("sooraj")).toBeInTheDocument();
  screen.debug();
});

describe("", () => {
  test("test on rendering  input HomePage by sending dummyprop ", () => {
    render(
      <BrowserRouter>
        <HomePage
          handleInputName={() => {}}
          inpuName={"sooraj"}
          handleOnRadioGenderSelect={() => {}}
          handleOnSelect={() => {}}
          isFormFill={false}
          gender={"Female"}
          selectedLaguage={"Kannada"}
        ></HomePage>
      </BrowserRouter>
    );

    expect(screen.getByDisplayValue("sooraj")).toBeInTheDocument();
    const submitBtn = screen.getByDisplayValue(/submit/i);

    expect(submitBtn).toBeDisabled();

    expect(screen.getByDisplayValue("Kannada")).toBeInTheDocument();

    const tree = renderer
      .create(
        <BrowserRouter>
          <HomePage
            handleInputName={() => {}}
            inpuName={"sooraj"}
            handleOnRadioGenderSelect={() => {}}
            handleOnSelect={() => {}}
            isFormFill={false}
            gender={"Female"}
            selectedLaguage={"Kannada"}
          ></HomePage>
        </BrowserRouter>
      )
      .toJSON();
    console.log("::", tree);
    expect(tree).toMatchSnapshot();
    // screen.debug();
  });
});

describe("testing on QuesionOne componet !--Fill in the blank type--!  ", () => {
  test("rendering QuesionOne ", () => {
    render(
      <QusionOne
        data={data[0]}
        inputAnswer={"28"}
        handleOnAnswerCompletion={() => {}}
      ></QusionOne>
    );
    // screen.debug();
    const tree2 = renderer
      .create(
        <QusionOne
          data={data[0]}
          inputAnswer={"28"}
          handleOnAnswerCompletion={() => {}}
        ></QusionOne>
      )
      .toJSON();
    console.log("::", tree2);
    expect(tree2).toMatchSnapshot();
  });
});

//error in testing

// describe("testing on QuesionTwo !--Yes or not type or multy choice qusion --!  ", () => {
//   test("rendering ", () => {
//     render(
//       <QusionTwo
//         data={data[1]}
//         language={"kannada"}
//         handleOnAnswerCompletion={() => {}}
//       ></QusionTwo>
//     );
//     screen.debug();
//   });
// });

// data,
// language,
// handleOnAnswerCompletion,
// setInputAnswer,
// inputAnswer,
// handleOnCarrectAnswer,
