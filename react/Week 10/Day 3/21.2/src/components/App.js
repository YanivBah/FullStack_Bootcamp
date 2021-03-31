import React, {useRef} from "react";
import "./app.css";

const App = () => {
  const videoRef = useRef(null)

  return (
    <div>
      <video
        ref={videoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
        width="600"
        height="300"
      />
      <br />
      <button onClick={() => videoRef.current.play()}>Play</button>
      <button onClick={() => videoRef.current.pause()}>Pause</button>
    </div>
  );

}

export default App;