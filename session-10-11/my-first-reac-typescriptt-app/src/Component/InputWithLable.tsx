import { ChangeEvent, ReactChild } from "react";

type ImputWithLableProp = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  children: ReactChild;
  id: string;
  autoFocus: boolean;
};

const Search = ({
  onChange,
  value,
  children,
  id,
  autoFocus = false,
}: ImputWithLableProp) => {
  const handelChange = (e: any) => {
    onChange(e);
  };

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        autoFocus={autoFocus}
        id={id}
        value={value}
        onChange={handelChange}
      />
    </>
  );
};
export default Search;
