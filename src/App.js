import React, { useEffect, useRef, useState } from "react";
import ReactNotion from "./Notion";

function App() {
  const canvas = useRef(null);

  const draw = () => {
    if (canvas.current.getContext) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "rgb(200,0,0)";
      ctx.fillRect(10, 10, 50, 50);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect(30, 30, 50, 50);
    }
  };
  // ctx.fillRect(25, 25, 100, 100);
  // ctx.clearRect(45, 45, 60, 60);
  // ctx.strokeRect(50, 50, 50, 50);

  useEffect(() => {
    // console.log(canvas);
    // draw();
  }, []);

  return (
    <div className="App">
      <ReactNotion />
    </div>
  );
}

export default App;
