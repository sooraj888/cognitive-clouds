import { render, screen, fireEvent, act } from "@testing-library/react";
import App from "./App";
import { storyReducer } from "./App";
import { Item } from "./Component/List";
import SearchForm from "./Component/SearchForm";

const story1 = {
  title: "chandammama",
  url: "s",
  objectID: "0",
  author: "ananth",
  num_comments: "200",
};

const story2 = {
  title: "vikramadhithya",
  url: "s",
  objectID: "1",
  author: "ananth",
  num_comments: "200",
};

const Story = [story1, story2];

describe("test story reduce ", () => {
  test("revome story from reducer", () => {
    const state = { data: Story, isLoading: false, isError: false };
    const action = { type: "Remove_STORY", payload: story1.objectID };
    const result = storyReducer(state, action);
    const newState = { data: [story2], isLoading: false, isError: false };

    expect(result).toStrictEqual(newState);
  });
});

describe("test of Item component", () => {
  test("render items ", () => {
    render(<Item item={story1} onDelete={() => {}} />);
    screen.debug();
  });
  test("assert if title exsist", () => {
    render(<Item item={story1} onDelete={() => {}} />);
    expect(screen.getByText("Remove")).toBeInTheDocument();
  });
  test("button exsists", () => {
    render(<Item item={story1} onDelete={() => {}} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  test("handle delete click", () => {
    const handleDeleteItem = jest.fn();
    render(<Item item={story1} onDelete={handleDeleteItem} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleDeleteItem).toHaveBeenCalledTimes(1);
  });
});
describe("Search form", () => {
  test("handle search", () => {
    const searcProp = {
      onSubmit: jest.fn(),
      onSearch: jest.fn(),
      searchedTearm: "sadd",
    };
    render(<SearchForm {...searcProp} />);
    expect(screen.getByDisplayValue("sadd")).toBeInTheDocument();
  });
});
