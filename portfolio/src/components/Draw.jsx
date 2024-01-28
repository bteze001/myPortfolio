import { useRef, useState, useEffect } from "react";

/**
 * Represents a drawing canvas that creates trails as the user moves the mouse.
 *
 * @component
 */

const Draw = () => {
  // Create a reference to the canvas element
  const canvasRef = useRef(null);
  // Store the last position of the mouse
  const lastPositionRef = useRef(null);
  const [drawingEnabled, setDrawingEnabled] = useState(true);

  useEffect(() => {
    // Get the canvas and its context
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleMouseMove = (e) => {

      if (!drawingEnabled) {
        return;
      }

    // Add a mousemove event listener to the canvas
    //canvas.addEventListener("mousemove", (e) => {
      // Set the drawing settings
      ctx.lineWidth = 0.2;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#fff";
      ctx.globalAlpha = 1;

      const { pageX, pageY } = e;

      if (lastPositionRef.current) {
        const { x, y } = lastPositionRef.current;
        // Move the pen to the last position and draw a line to the current position
        ctx.moveTo(x - canvas.offsetLeft, y - canvas.offsetTop);
        ctx.lineTo(pageX - canvas.offsetLeft, pageY - canvas.offsetTop);
        ctx.stroke();
      }

      // Update the last position
      lastPositionRef.current = { x: pageX, y: pageY };
    };

    canvas.addEventListener("mousemove",handleMouseMove);

    return () => {

      canvas.removeEventListener("mousemove",handleMouseMove);

    };
  }, [drawingEnabled]); // Empty dependency array ensures this effect runs only once

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 100, left: 0 }}
      width={window.innerWidth}
      height={window.innerHeight - 100}
      onMouseMove={() => setDrawingEnabled(false)}
    />
  );
};

export default Draw;
