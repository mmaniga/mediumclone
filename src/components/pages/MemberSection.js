import React from "react";
import { memberSection } from "../../data";
import MemberStoryItem from "./MemberStoryItem";

const MemberSection = () => {
  return (
    <>
      <section id="membership">
        <div className="container">
          <h3>{memberSection.titleText} </h3>
          <h5 className="sub-title pb-2">{memberSection.titleSubText} </h5>
          <div className="row pt-2">
            <div className="col-lg-8 mb-5">
              {memberSection.stories.map((p) => {
                return (
                  <MemberStoryItem
                    id={p.id}
                    title={p.title}
                    caption={p.caption}
                    text={p.text}
                    dateAndReadTime={p.dateAndReadTime}
                  />
                );
              })}
            </div>
            <div className="col-lg-4 mb-3">
              <aside>
                <h4> Discover more of story </h4>
                <div className="d-flex d-flex flex-wrap py-2">
                  <a className="right-side-btn"> Programming </a>
                  <a className="right-side-btn"> Data Science</a>
                  <a className="right-side-btn"> Technology </a>
                  <a className="right-side-btn"> Self Improvement </a>
                  <a className="right-side-btn"> Writing </a>
                  <a className="right-side-btn"> Relationships </a>
                  <a className="right-side-btn"> Machine Learning </a>
                  <a className="right-side-btn"> Productivity </a>
                  <a className="right-side-btn"> Politics </a>
                </div>
                <div className="m-right"> </div>
                <div className="d-flex d-flex flex-wrap py-2">
                  <a className="right-menu"> Help </a>
                  <a className="right-menu"> Status </a>
                  <a className="right-menu"> Writers </a>
                  <a className="right-menu"> Careers </a>
                  <a className="right-menu"> Privacy </a>
                  <a className="right-menu"> Terms </a>
                  <a className="right-menu"> About </a>
                  <a className="right-menu"> Text to speech </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/*  --------  membership Section End ----------  */}
    </>
  );
};

export default MemberSection;
