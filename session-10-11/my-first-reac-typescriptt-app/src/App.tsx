import "./App.css";
import List from "./Component/List";
import InputWithLable from "./Component/InputWithLable";
import { useEffect, useState } from "react";
import useSemiPersistenceState from "./hooks/useSemiPersistenceState";

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
];

function App() {
  const [stories, setStoreis] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const [searchedTearm, setSerchedTearm] = useSemiPersistenceState(
    "",
    "searchedTearm"
  );
  const getAsyncStoreis = new Promise((res, rej) =>
    setTimeout(() => rej({ data: { stories: list } }), 2000)
  );
  //Promise.resolve({ data: { stories: list } });  setLoading(false);

  useEffect(() => {
    setLoading(true);
    getAsyncStoreis
      .then((result: any) => {
        setLoading(false);
        setStoreis(result.data.stories);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const searchHnadler = (e: any) => {
    setSerchedTearm(e.target.value);
  };

  const filterdList: any = stories.filter((item: any) => {
    return item.title.toUpperCase().includes(searchedTearm.toUpperCase());
  });

  const handelRemoveStory = (id: any) => {
    const newStories = stories.filter((item: any) => item.objectID !== id);
    setStoreis(newStories);
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
      {isLoading ? (
        <p>loading..</p>
      ) : (
        <List STories={filterdList} onRemove={handelRemoveStory} />
      )}
      {isError && <p>somthing went wrong...</p>}
    </div>
  );
}
function getTitle() {
  return "Hello React";
}

export default App;
