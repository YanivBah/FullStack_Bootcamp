import React from "react";

const List = ({ results, setError }) => {
  const createLI = () => {
    const li = results.map((result) => {
      if (result.url && result.title) {
        return (
          <li key={result.objectID}>
            <a href={result.url}>{result.title}</a>
          </li>
        );
      } else return null;
    });

    if (li.length > 0) {
      return li;
    }
     else {
      setError(`Didn't found results, try different term`);
      return null
    }

  };

  return <ol>{createLI()}</ol>;
};

export default List;
