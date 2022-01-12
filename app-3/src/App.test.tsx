import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import PostList from "./componenet/PostList";
import { BrowserRouter, Routes } from "react-router-dom";

// countPost,
// postData,
// selectedPost,
// handleOnPaginationChange,

//title objectID url author created_at

const storyOne = {
  title: "Google",
  objectID: "1",
  url: "http://google.com",
  author: "Jimmy",
  created_at: "24-44-33",
};
const storyTwo = {
  title: "Microsoft",
  objectID: "2",
  url: "http://microsoft.com",
  author: "Max",
  created_at: "24-445-33",
};
const postData = [[storyOne, storyTwo]];

describe("test on PostList ", () => {
  test("displaying PostList componenet without sending dummy props", () => {
    render(<PostList></PostList>);
    screen.debug();
  });
});

describe(" PostList ", () => {
  test("displaying PostList componenet with dummy props ", () => {
    const PostListProps = {
      postData: postData,
      countPost: 1,
      selectedPost: 0,
      handleOnPaginationChange: jest.fn(),
    };

    render(
      <BrowserRouter>
        <PostList {...PostListProps}></PostList>
      </BrowserRouter>
    );

    screen.debug();
  });
});

describe(" PostList ", () => {
  const PostListProps = {
    postData: postData,
    countPost: 1,
    selectedPost: 0,
    handleOnPaginationChange: jest.fn(),
  };
  test("rendering all properties ", () => {
    render(
      <BrowserRouter>
        <PostList {...PostListProps}></PostList>
      </BrowserRouter>
    );
    expect(screen.getByText(/Microsoft/)).toBeInTheDocument();

    expect(screen.getByText("http://google.com")).toHaveAttribute(
      "href",
      "http://google.com"
    );
  });
});

describe(" PostList ", () => {
  const PostListProps = {
    postData: postData,
    countPost: 1,
    selectedPost: 0,
    handleOnPaginationChange: jest.fn(),
  };
  test("rendering a link ", () => {
    render(
      <BrowserRouter>
        <PostList {...PostListProps}></PostList>
      </BrowserRouter>
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});

describe(" PostList ", () => {
  const PostListProps = {
    postData: postData,
    countPost: 1,
    selectedPost: 0,
    handleOnPaginationChange: jest.fn(),
  };
  test("clicking first pagination button", () => {
    render(
      <BrowserRouter>
        <PostList {...PostListProps}></PostList>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("1"));
    expect(PostListProps.handleOnPaginationChange).toHaveBeenCalledTimes(1);
    screen.debug();
  });
});

describe(" PostList ", () => {
  const PostListProps = {
    postData: postData,
    countPost: 1,
    selectedPost: 0,
    handleOnPaginationChange: jest.fn(),
  };
  test("count of select link ", () => {
    render(
      <BrowserRouter>
        <PostList {...PostListProps}></PostList>
      </BrowserRouter>
    );

    expect(screen.getAllByText(/Select/).length).toBe(2);
  });
});

describe(" PostList ", () => {
  const PostListProps = {
    postData: postData,
    countPost: 2,
    selectedPost: 0,
    handleOnPaginationChange: jest.fn(),
  };
  test("renders a snapshot ", () => {
    const { container } = render(
      <BrowserRouter>
        <PostList {...PostListProps}></PostList>
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
