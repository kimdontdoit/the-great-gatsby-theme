import React from "react";
import { Link } from "gatsby";

import "./Card.scss";

const Card = ({ postNode }) => {
  /* Prepare data */
  const post = postNode.frontmatter;
  const url = postNode.fields.slug;

  return (
    <div className="card">
      <div className="card-img-wrapper">
        <Link to={url}>
          {post.featured_img && (
            <img className="card-img" alt="img" src={post.featured_img[0]} />
          )}
        </Link>
      </div>
      <Link to={url}>
        <h4 className="card-title">{post.title}</h4>
      </Link>
      <div className="card-content">
        <span>
          by <a href="/">{post.authors[0]}</a> in{" "}
          <a href="/">{post.category}</a>
        </span>
      </div>
    </div>
  );
};

export default Card;
