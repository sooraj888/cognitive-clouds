const Search = ({ onChange, value, children, id, autoFocus = false }: any) => {
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
