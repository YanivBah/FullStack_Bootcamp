import React from "react";

const Search = ({ onClick,term }) => {
  const searchRef = React.createRef();

  return (
    <div className="flex">
      <input ref={searchRef} type="text" placeholder="Search here" defaultValue={term} />
      <button onClick={() => onClick(searchRef.current.value)}>Search</button>
    </div>
  );
};

export default Search;
