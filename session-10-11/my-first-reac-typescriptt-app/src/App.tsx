import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Component/List';
import Search from './Component/Search';

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
];

function App() {
  return (
   <div className="container">
      <h1>{getTitle()}</h1>
      <Search />
      <div className="elementHedding">
          <span>Title</span>
          <span>URL</span>
          <span>Author</span>
        </div>
       <List stories={list}/>
     
   </div>
  );
}
function getTitle() {
  return "Hello React";
}


export default App;
