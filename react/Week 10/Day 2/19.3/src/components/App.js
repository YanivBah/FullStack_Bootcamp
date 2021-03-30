import React, {useState, useEffect} from "react";
import axios from "axios";
import "./app.css";
import api from "./api";
import Search from "./Search";
import List from "./List";
import Spinner from "./Spinner";

const App = () => {
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState('hooks');
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    const fetch = async() => {
      const data = await api(term, setError);
      if (typeof data !== 'string') {
        const { hits } = data;
        console.log(hits);
        setResults(hits);
        setLoading(false);
      } else {
        setError(data);
      }
    }
    fetch();
  },[term]);

  return (
    <div>
      <Search onClick={setTerm} term={term} />
      {isLoading && !error && <Spinner />}
      {error !== "" && <h3 className="error">{error}!</h3>}
      {!isLoading && <List results={results} setError={setError} />}
    </div>
  );
}
export default App;
