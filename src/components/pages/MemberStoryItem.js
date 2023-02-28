import React from "react";

const MemberStoryItem = ({ id, caption, title, text, dateAndReadTime }) => {
  return (
    <a href="#" className="membership d-flex justify-content-start mb-2">
      <div className="story-count">{id}</div>
      <div className="members">
        <div className="story d-flex justify-content-start">
          <div className="story-pic"> {title[0]} </div>
          <div className="members-name">{title} </div>
        </div>
        <h5 className="members-caption">{caption}</h5>
        <p> {text} </p>
        <div className="d-flex justify-content-start"></div>

        <span> {dateAndReadTime} </span>
      </div>
      <div className="members-photo-video"></div>
    </a>
  );
};

export default MemberStoryItem;
