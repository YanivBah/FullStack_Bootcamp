import React, { useState } from "react";

const Paragraph = (props) => {
  const initial = props.text.length > props.textLength ? true : false;
  const [hideText, setHideText] = useState(initial);

  return(
    <div>
      {hideText && <p>{props.text.split('').splice(0,props.textLength-1)}...</p>}
      {!hideText && <p>{props.text}</p>}
      <button onClick={() => {setHideText(!hideText)}}>{hideText ? 'Read More' : 'Show Less'}</button>
    </div>
  );
}

export default Paragraph;