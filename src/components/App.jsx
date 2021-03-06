import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  console.log(time);
  var [currentTime, myTime] = useState(time);
  function updateTime() {
    myTime(new Date().toLocaleTimeString());
  }
  // update the time each second 1000 miliseconds
  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
