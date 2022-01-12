import React, { useCallback, useEffect, useMemo, useState, memo } from "react";
import logo from "./logo.svg";

import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";

const PostList = ({
  countPost,
  postData,
  selectedPost,
  handleOnPaginationChange,
}: any) => {
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
                    <Link to={"/" + item?.objectID}>Select</Link>
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
          page={selectedPost + 1}
        />
      </div>
    </div>
  );
};

export default PostList;
