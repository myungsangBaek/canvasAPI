import React, { useEffect, useRef } from "react";

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    console.log(canvasRef.current.getContext("2d"));
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }, []);

  return (
    <div className="App">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default App;
