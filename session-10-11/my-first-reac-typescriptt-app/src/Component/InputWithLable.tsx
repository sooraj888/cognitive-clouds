import React from "react";

const Search = ({ onChange, value, children, id }: any) => {
  const handelChange = (e: any) => {
    onChange(e);
  };

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input id={id} value={value} onChange={handelChange} />
    </>
  );
};
export default Search;
