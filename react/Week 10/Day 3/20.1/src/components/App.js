import React, {useState, useEffect} from "react";
import axios from "axios";
import "./app.css";

const App = () => {
  const [display, setDisplay] = useState(false);
  const [data, setData] = useState([]);

  const handleClick = () => setDisplay(!display);

  useEffect(() => {
    let token = axios.CancelToken.source();

    const fetchData = async () => {
      const { data } = await axios.get(`https://swapi.dev/api/people/`, {
        cancelToken: token.token,
      });
      setData([data]);
    }

    if (!display) {
      setData([])
    } else {
      fetchData();
    }

    return () => token.cancel();

 }, [display])

  return (
    <div>
      <button onClick={handleClick}>
        {display ? "Hide Data" : "Show Data"}
      </button>
      <p>{display && data.length > 0 && JSON.stringify(data)}</p>
    </div>
  );
}
export default App;
