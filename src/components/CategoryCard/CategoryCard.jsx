import React from "react";
import { Link } from "gatsby";
import "./CategoryCard.css";

const CategoryCard = ({ postNode }) => {
  /* Prepare data */
  const post = postNode.frontmatter;
  const url = postNode.fields.slug;

  /* Render */
  return (
    <div className="card">
      <div className="card-img-wrapper">
        <Link to={url}>
          <img className="card-img" alt="img" src={post.featured_img} />
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

export default CategoryCard;
