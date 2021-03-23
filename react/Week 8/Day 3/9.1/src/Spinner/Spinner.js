import React from "react";
import "./spinner.css";

const Spinner = () => {
  const spinners = ['spinner1','spinner2','spinner3'];
  const currentSpinner = spinners[Math.floor(Math.random() * 3)];
  return <div className={`spinner ${currentSpinner}`}> </div>
}

export default Spinner;
