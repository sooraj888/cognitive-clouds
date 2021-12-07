import React from "react";
import InputWithLable from "./InputWithLable";

const SearchForm = ({ onSubmit, searchedTearm, onSearch }: any) => {
  return (
    <form onSubmit={onSubmit}>
      <InputWithLable
        id="search"
        value={searchedTearm}
        onChange={onSearch}
        autoFocus={true}
      >
        Search
      </InputWithLable>
      <button
        disabled={!searchedTearm}
        className={`submitButton ${!searchedTearm ? `disabled` : ``}`}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default SearchForm;
