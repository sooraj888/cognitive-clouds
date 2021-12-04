import "./App.css";
import List from "./Component/List";
import InputWithLable from "./Component/InputWithLable";
import { useEffect, useReducer } from "react";
import useSemiPersistenceState from "./hooks/useSemiPersistenceState";

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
const API_END_POINT = "https://hn.algolia.com/api/v1/search?query=";

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

  useEffect(() => {
    dispatchStoreis({ type: "Fetch_INIT" });

    fetch(API_END_POINT + searchedTearm)
      .then((r) => r.json())
      .then((result: any) => {
        dispatchStoreis({ type: "SET_STORYIES", payload: result.hits });
      })
      .catch((e) => {
        console.log(e);
        dispatchStoreis({ type: "FEATCH_STORIES_FAILED" });
      });
  }, [searchedTearm]);

  const searchHnadler = (e: any) => {
    setSerchedTearm(e.target.value);
  };

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
        <List STories={stories.data} onRemove={handelRemoveStory} />
      )}
      {stories.isError && <p>somthing went wrong...</p>}
    </div>
  );
}
function getTitle() {
  return "Hello React";
}

export default App;
