import React, { ChangeEvent, FormEvent } from "react";
import InputWithLable from "./InputWithLable";

type SearchFormProp = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchedTearm: any;
};

const SearchForm = ({ onSubmit, searchedTearm, onSearch }: SearchFormProp) => {
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
