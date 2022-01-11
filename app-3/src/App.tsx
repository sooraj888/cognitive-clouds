import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Pagination from "@mui/material/Pagination";

import PostList from "./componenet/PostList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [countPost, setCountPost] = useState<number>(NaN);
  const [postData, setPostData] = useState<any>([]);
  const [selectedPost, setSelectedPost] = useState<number>(0);

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
