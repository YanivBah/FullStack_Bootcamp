import React, {useState, useEffect, useRef} from "react";
import "./app.css";

const App = () => {
  const inputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);


  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

  }, [showInput]);

  return (
    <div className="flex">
      {showInput && <input ref={inputRef} type="text" />}

      <button 
      onClick={() => {
        setShowInput(!showInput);
        if (showInput) inputRef.current.focus();
      }}>
      {showInput ? "Save" : "Edit"}
      </button>
    </div>
  );
}


export default App;
