import "./App.css";
import List from "./Component/List";
import InputWithLable from "./Component/InputWithLable";
import { useCallback, useEffect, useReducer, useState } from "react";
import useSemiPersistenceState from "./hooks/useSemiPersistenceState";
import axios from "axios";
import SearchForm from "./Component/SearchForm";

const storyReducer = (state: any, action: any) => {
  console.log("action from useReducer", action);
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
  const [url, setUrl] = useState(API_END_POINT);
  const [stories, dispatchStoreis] = useReducer(storyReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  const [searchedTearm, setSerchedTearm] = useSemiPersistenceState(
    "",
    "searchedTearm"
  );

  const handleFetchStories = useCallback(async () => {
    dispatchStoreis({ type: "Fetch_INIT" });
    try {
      const responce = await axios.get(url);
      dispatchStoreis({ type: "SET_STORYIES", payload: responce.data.hits });
    } catch (e) {
      dispatchStoreis({ type: "FEATCH_STORIES_FAILED" });
    }
  }, [url]);

  useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setUrl(API_END_POINT + searchedTearm);
  };

  const searchHnadler = (e: any) => {
    console.log("SASDD", e);

    setSerchedTearm(e.target.value);
  };

  const handelRemoveStory = (id: any) => {
    dispatchStoreis({ type: "Remove_STORY", payload: id });
  };

  return (
    <div className="container">
      <h1>{getTitle()}</h1>
      <SearchForm
        onSearch={searchHnadler}
        onSubmit={handleSubmit}
        searchedTearm={searchedTearm}
      ></SearchForm>
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
