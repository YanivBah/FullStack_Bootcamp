import React from "react";

const QuizTitle = () => {
  return <h1>How Do You Like Front End?</h1>
};

const Q1 = () => {
  return (
  <div>
    <Q1Title/>
    <Q1Input/>
  </div>
  )};

const Q1Title = () => {
  return <label htmlFor="q1">How Much you love front end?</label>
};
const Q1Input = () => {
  return (
    <input
      type="range"
      name="q1"
      min="1"
      max="5"
      style={{ display: "block",margin: "0 auto"}}
    />
  );
};

const Q2 = () => {
  return (
  <div>
    <Q2Title/>
    <Q2Input/>
  </div>
  );
};

const Q2Title = () => {
  return <label htmlFor="q2">What is your favourite front end feature/topic</label>
};

const Q2Input = () => {
  return <input type="text" name="q2" style={{display: "block",margin: "0 auto"}} />
};

const Quiz = () => {
  return (
    <form style={{ textAlign: "center",border: "3px double black",paddingBottom: "20px"}}>
      <QuizTitle />
      <Q1 />
      <Q2 />
    </form>
  );
};

export default Quiz;
