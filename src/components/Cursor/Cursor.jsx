import React, { useEffect, useState } from "react";
import useCursorPosition from "@kimdontdoit/the-great-gatsby-theme/src/hooks/useCursorPosition";
import "./Cursor.scss";

const Cursor = ({ image }) => {
  if (!image) {
    return;
  }

  const { mouseX, mouseY } = useCursorPosition();

  return (
    <div
      className="cursor fixed"
      style={{
        border: `2px solid black`,
        left: `${mouseX}px`,
        top: `${mouseY}px`,
      }}
    />
  );
};

export default Cursor;
