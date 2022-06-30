import React, { useEffect, useRef } from "react";

function App() {
  const canvas = useRef(null);

  const draw = () => {
    const ctx = canvas.current.getContext("2d");
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50);
  };

  useEffect(() => {
    // const ctx = canvas.current.getContext("2d");
    // ctx.fillRect(25, 25, 100, 100);
    // ctx.clearRect(45, 45, 60, 60);
    // ctx.strokeRect(50, 50, 50, 50);
    draw();
  }, []);

  return (
    <div className="App">
      <canvas ref={canvas} />
    </div>
  );
}

export default App;
