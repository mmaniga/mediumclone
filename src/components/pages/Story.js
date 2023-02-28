import React from "react";
import StoryItem from "./StoryItem";
import { stories } from "../../data";
const Story = () => {
  return (
    <>
      {/*  --------  About Our story Section  ----------  */}
      <section id="our_story">
        <div className="container">
          <h3>The industry's standard </h3>
          <h5 className="sub-title pb-2">since the 1500s </h5>
          <div className="row pt-2">
            {stories.map((story) => {
              return (
                <StoryItem
                  id={story.id}
                  icon={story.icon}
                  title={story.title}
                  text={story.text}
                  dateAndReadTime={story.dateAndReadTime}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/*  --------  About Our story  Section End  ----------  */}
    </>
  );
};

export default Story;
