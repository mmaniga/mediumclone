import React from "react";

function StoryItem({ id, icon, title, text, dateAndReadTime }) {
  return (
    <div className="col-lg-4 mb-3">
      <a href="#" className="story d-flex justify-content-start">
        <div className="story-count">{id}</div>
        <div className="our_story">
          <div className="d-flex justify-content-start">
            <div className="story-pic"> {title[0]} </div>
            <div className="story-name">{title} </div>
          </div>
          <p> {text} </p>
          <span> {dateAndReadTime} </span>
        </div>
      </a>
    </div>
  );
}

export default StoryItem;
