import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  screen.debug();
  fireEvent.change(screen.getByDisplayValue(/aa/i), {
    target: { value: "bb" },
  });
  expect(screen.getByDisplayValue(/bb/i)).toBeInTheDocument();
  screen.debug();
});
