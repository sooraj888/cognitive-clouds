import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import InputFormPage from "./InputFormPage";

describe("testing InputFormPage", () => {
  test("testing on input prop", () => {
    render(
      <BrowserRouter>
        <InputFormPage
          typedCountry="india"
          handleOnInputCountryChange={() => {}}
          isCountryTyped={true}
          onInputFormSubmit={jest.fn()}
        ></InputFormPage>
      </BrowserRouter>
    );
    const a = screen.getByDisplayValue("india");

    expect(a).toBeInTheDocument();
    screen.debug();
  });
});
