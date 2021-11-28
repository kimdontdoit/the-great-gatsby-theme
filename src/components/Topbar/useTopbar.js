import React, { useState, useEffect } from "react";

export default function useTopbar() {
  // TODO hide on scroll down, show on scroll up
  //

  const [isTopbarVisible, setTopbarVisible] = useState(true);

  return { isTopbarVisible, setTopbarVisible };
}
