import React from "react";

import "./Heading.css";

const Heading = ({ tag, size, children, ...otherProps }) => {
  const Tag = `${tag}`;
  //console.log(otherProps);

  return <Tag {...otherProps}>{children}</Tag>;
};
export default Heading;
