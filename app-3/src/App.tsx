import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [countPost, setCountPost] = useState<number>(NaN);
  const [postData, setPostData] = useState<any>([]);
  const [selectedPost, setSelectedPost] = useState<number>(0);
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
        if (rawCount >= 0) {
          clearInterval(myInterval);
        }
      });
  };

  useEffect(() => {
    handleUpdateData();
    myInterval = setInterval(handleUpdateData, 10000);
  }, []);
  useEffect(() => {
    console.log("countPost", countPost);
  }, [countPost]);

  return (
    <div className="App">
      <h1>List</h1>
      {console.log(postData)}
      {postData && postData?.[selectedPost]
        ? postData?.[selectedPost].map((item: any) => {
            console.log("item inside post data", item);
            return (
              <div key={item?.objectID}>
                <span className="listItems">{item?.title}</span>
                <span className="listItems">{item?.url}</span>
                <span className="listItems">{item.author} </span>
                <span className="listItems">{item?.created_at}</span>
              </div>
            );
          })
        : console.log("data not exits")}
    </div>
  );
}

export default App;
