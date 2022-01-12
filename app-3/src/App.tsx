import React, { useCallback, useEffect, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Pagination from "@mui/material/Pagination";

import PostList from "./componenet/PostList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
    if (rawCount >= 49) {
      clearInterval(myInterval);
    }
  };
  const handleOnPaginationChange = (e: any, value: any) => {
    console.log("pagination change", value);
    setSelectedPost(value - 1);
  };

  useMemo(() => {
    handleUpdateData();
    myInterval = setInterval(handleUpdateData, 10000);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PostList
                countPost={countPost}
                setCountPost={setCountPost}
                postData={postData}
                setPostData={setPostData}
                selectedPost={selectedPost}
                setSelectedPost={setSelectedPost}
                handleOnPaginationChange={handleOnPaginationChange}
              ></PostList>
            }
          ></Route>

          {postData && postData?.[selectedPost]
            ? postData?.[selectedPost].map((item: any) => {
                return (
                  <Route
                    key={item?.objectID}
                    path={"/" + item?.objectID}
                    element={
                      <div className="rawJson">
                        <h1>Raw Json of selected post</h1>
                        {JSON.stringify(item)}
                      </div>
                    }
                  ></Route>
                );
              })
            : console.log("data not exits")}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
