import React from "react";

const List = ({ countries, term }) => {
  const createLI = () => {
    return countries.map(country => {
      if (term) {
        return (country.toLowerCase().startsWith(term.toLowerCase()) ? <li>{country}</li> : null);
      } else {
        return <li>{country}</li>
      }
    })
  };

  return <ol>{createLI()}</ol>;
};

export default List;
