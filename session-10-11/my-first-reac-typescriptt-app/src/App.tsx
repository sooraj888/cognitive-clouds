import "./App.css";
import List from "./Component/List";
import InputWithLable from "./Component/InputWithLable";
import { useEffect, useReducer, useState } from "react";
import useSemiPersistenceState from "./hooks/useSemiPersistenceState";
import { type } from "os";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: "Learn React",
    url: "https://redux.js.org/",
    author: "Dan Abramov",
    num_comments: 2,
    points: 5,
    objectID: 2,
  },
  {
    title: "Demo React",
    url: "https://redux.js.org/",
    author: "Dan Abramov",
    num_comments: 2,
    points: 5,
    objectID: 3,
  },
];

const storyReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_STORYIES":
      return { data: action.payload, isLoading: false, isError: false };

    case "Remove_STORY": {
      const showUpdatedStories = state.data.filter(
        (item: any) => item.objectID !== action.payload
      );
      return { data: showUpdatedStories, isLoading: false, isError: false };
    }
    case "Fetch_INIT": {
      return { ...state, isLoading: true, isError: false };
    }
    case "FEATCH_STORIES_FAILED": {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};

function App() {
  const [stories, dispatchStoreis] = useReducer(storyReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  const [searchedTearm, setSerchedTearm] = useSemiPersistenceState(
    "",
    "searchedTearm"
  );
  const getAsyncStoreis = new Promise((res, rej) =>
    setTimeout(() => res({ data: { stories: list } }), 2000)
  );

  useEffect(() => {
    dispatchStoreis({ type: "Fetch_INIT" });

    getAsyncStoreis
      .then((result: any) => {
        dispatchStoreis({ type: "SET_STORYIES", payload: result.data.stories });
      })
      .catch(() => {
        dispatchStoreis({ type: "FEATCH_STORIES_FAILED" });
      });
  }, []);

  const searchHnadler = (e: any) => {
    setSerchedTearm(e.target.value);
  };

  const filterdList: any = stories.data.filter((item: any) => {
    return item.title.toUpperCase().includes(searchedTearm.toUpperCase());
  });

  const handelRemoveStory = (id: any) => {
    dispatchStoreis({ type: "Remove_STORY", payload: id });
  };

  return (
    <div className="container">
      <h1>{getTitle()}</h1>

      <InputWithLable
        id="search"
        value={searchedTearm}
        onChange={searchHnadler}
        autoFocus={true}
      >
        Search
      </InputWithLable>
      {stories.isLoading ? (
        <p>loading..</p>
      ) : (
        <List STories={filterdList} onRemove={handelRemoveStory} />
      )}
      {stories.isError && <p>somthing went wrong...</p>}
    </div>
  );
}
function getTitle() {
  return "Hello React";
}

export default App;
