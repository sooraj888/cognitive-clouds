import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [countPost, setCountPost] = useState<number>(NaN);
  const [postData, setPostData] = useState<any>([]);
  let rawCount: number = -1;
  let rawPostData: any = [];
  let myInterval: any;
  const handleUpdateData = () => {
    rawCount = rawCount + 1;
    fetch(`http://hn.algolia.com/api/v1/search?query=bar&page=${rawCount}`)
      .then((rawData: any) => rawData.json())
      .then((data: any) => {
        console.log(data);
        rawPostData = [...rawPostData, data?.hits];
        setPostData(rawPostData);
        setCountPost(rawCount + 1);
        if (rawCount >= 1) {
          clearInterval(myInterval);
        }
      });
  };

  useEffect(() => {
    // handleUpdateData();
    // myInterval = setInterval(handleUpdateData, 10000);
  }, []);
  useEffect(() => {
    console.log("countPost", countPost);
  }, [countPost]);
  useEffect(() => {
    console.log(postData);
  }, [postData]);
  return (
    <div className="App">
      <h1>List</h1>
    </div>
  );
}

export default App;
