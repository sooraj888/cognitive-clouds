import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import AddForm from "./componenets/AddForm";

describe("test 1", () => {
  test("test 0.1", () => {
    render(<App />);
    screen.debug();
    screen.getByDisplayValue("");
  });
});

describe("test 2 on AddingTodo", () => {
  test("test 0.1", () => {
    render(<AddForm />);
    screen.debug();
    screen.getByDisplayValue("");
    // fireEvent.change();
  });
});
