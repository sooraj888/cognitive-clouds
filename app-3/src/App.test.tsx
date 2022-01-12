import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import PostList from "./componenet/PostList";

describe("test on PostList ", () => {
  test("displaying PostList componenet ", () => {});
  render(<PostList></PostList>);
  screen.debug();
});
