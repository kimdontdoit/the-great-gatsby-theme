import React from "react";
import { Link } from "gatsby";

const Breadcrumbs = (props) => {
  const { frontmatter } = props;

  return (
    <>
      <div className="breadcrumbs">
        {/* TODO create component */}
        <div>
          <Link to="/">
            <span>Home</span>
          </Link>
        </div>
        <div>
          <span>→</span>
          <Link to="/browse">
            <span>{frontmatter.category}</span>
          </Link>
        </div>
        <div>
          <span>→</span>
          <span>{frontmatter.title}</span>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
