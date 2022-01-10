import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Pagination from "@mui/material/Pagination";

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
      });
    if (rawCount >= 1) {
      clearInterval(myInterval);
    }
  };
  const handleOnPaginationChange = (e: any, value: any) => {
    console.log("pagination change", value);
    setSelectedPost(value - 1);
  };

  const handleSelectButton = (rawJson: any, selectdPostNuber: any) => {
    console.log("rawJson", rawJson);
    window.open(
      `http://hn.algolia.com/api/v1/search?query=bar&page=${selectdPostNuber}`
    );
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
      <h1 className="AppName">List</h1>
      <div className="list">
        <div className="listHead">
          <span className="listTitle"> Title </span>
          <span className="listTitle">URL</span>
          <span className="listTitle">Author</span>
          <span className="listTitle">Created-At</span>
          <span className="listTitle"></span>
        </div>

        {console.log(postData)}
        {postData && postData?.[selectedPost]
          ? postData?.[selectedPost].map((item: any) => {
              // console.log("item inside post data", item);
              return (
                <div key={item?.objectID} className="listItem">
                  <span className="listItems">{item?.title}</span>
                  <a className="listItems" href={item?.url}>
                    {item?.url}
                  </a>
                  <span className="listItems">{item.author} </span>
                  <span className="listItems">{item?.created_at}</span>
                  <span className="listItems">
                    <button
                      onClick={() => handleSelectButton(item, selectedPost)}
                    >
                      select
                    </button>
                  </span>
                </div>
              );
            })
          : console.log("data not exits")}
      </div>
      <div className="paginationStyle">
        <Pagination
          variant="outlined"
          shape="rounded"
          count={countPost || 0}
          color="primary"
          onChange={handleOnPaginationChange}
        />
      </div>
    </div>
  );
}

export default App;
