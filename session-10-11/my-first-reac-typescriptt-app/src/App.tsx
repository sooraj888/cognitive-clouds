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
  const getAsyncStoreis = Promise.resolve({ data: { stories: list } });

  const [stories, setStoreis] = useState(list);

  const [searchedTearm, setSerchedTearm] = useSemiPersistenceState(
    "",
    "searchedTearm"
  );

  useEffect(() => {
    getAsyncStoreis.then((resul) => console.log("result is :", resul));
  }, []);

  const searchHnadler = (e: any) => {
    setSerchedTearm(e.target.value);
  };

  const filterdList: any = stories.filter((item: any) => {
    return item.title.toUpperCase().includes(searchedTearm.toUpperCase());
  });

  const handelRemoveStory = (id: any) => {
    const newStories = stories.filter((item) => item.objectID !== id);
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
        <b> Search</b>
      </InputWithLable>

      <List STories={filterdList} onRemove={handelRemoveStory} />
    </div>
  );
}
function getTitle() {
  return "Hello React";
}

export default App;
