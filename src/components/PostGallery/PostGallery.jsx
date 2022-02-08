import React, { useState } from "react";

import "./PostGallery.css";

export default function PostGallery({ post }) {
  const [currentSlidePos, setCurrentSlidePos] = useState(0);

  return (
    <>
      <div className="section postGallery">
        <div className="galleryCanva">
          {post.featured_img &&
            post.featured_img.map((image, index) => (
              <img
                key={index}
                className={` galleryCanvaItem ${
                  index === currentSlidePos ? "selected" : ""
                }`}
                src={image}
                alt="gallery"
              />
            ))}
        </div>

        <div className="galleryNav">
          {post.featured_img &&
            post.featured_img.map((image, index) => (
              <button
                key={index}
                className={`galleryNavItem ${
                  index === currentSlidePos ? "selected" : ""
                }`}
                onClick={() => setCurrentSlidePos(index)}
              >
                <img src={image} alt="gallery" />
              </button>
            ))}
        </div>
      </div>
    </>
  );
}
