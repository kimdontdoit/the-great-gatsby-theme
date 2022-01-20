import React, { useState, useEffect } from "react";
import { fromEvent } from "rxjs";
import { map, throttleTime } from "rxjs/operators";

export default function useCursorPosition(throttleTime = 100) {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  const handleCursorMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleCursorMove);
    return () => {
      window.removeEventListener("mousemove", handleCursorMove);
    };
  }, []);

  return {
    mouseX: x,
    mouseY: y,
  };
}
