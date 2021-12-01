import "./App.css";
import List from "./Component/List";
import InputWithLable from "./Component/InputWithLable";

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
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: "Learn React",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 2,
  },
];

function App() {
  const [searchedTearm, setSerchedTearm] = useSemiPersistenceState(
    "",
    "searchedTearm"
  );

  const searchHnadler = (e: any) => {
    setSerchedTearm(e.target.value);
  };

  const filterdList: any = list.filter((item: any) => {
    return item.title.includes(searchedTearm);
  });

  return (
    <div className="container">
      <h1>{getTitle()}</h1>

      <InputWithLable
        id="search"
        value={searchedTearm}
        onChange={searchHnadler}
      >
        <b> Search</b>
      </InputWithLable>

      <List STories={filterdList} />
    </div>
  );
}
function getTitle() {
  return "Hello React";
}

export default App;
