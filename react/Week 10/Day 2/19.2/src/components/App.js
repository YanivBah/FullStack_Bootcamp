import React, {useState, useEffect} from "react";
import axios from "axios";
import "./app.css";
import Search from "./Search";
import List from "./List";

const App = () => {
  const [countriesList, setCountries] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
      const countries = data.map(country => {
        return country.name;
      });
      setCountries(countries);
    }
    fetching();
  },[]);

  return (
    <div>
      <Search onChange={setTerm}/>
      <List countries={countriesList} term={term} />
    </div>
  );
}
export default App;
