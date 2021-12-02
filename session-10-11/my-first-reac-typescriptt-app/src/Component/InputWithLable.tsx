import { useEffect, useRef } from "react";

const Search = ({ onChange, value, children, id, autoFocus = false }: any) => {
  const inputRef = useRef<any>(null);

  const handelChange = (e: any) => {
    onChange(e);
  };

  useEffect(() => {
    if (autoFocus && inputRef) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input ref={inputRef} id={id} value={value} onChange={handelChange} />
    </>
  );
};
export default Search;
