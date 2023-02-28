import React from "react";
import { homeSectionData } from "../../data";

import undraw_business_chat_re_gg4h from "../../assets/images/undraw_business_chat_re_gg4h.svg";
const HomeSection = () => {
  const handleStartReding = () => {
    console.log("start reading clicked");
  };
  return (
    <>
      <section id="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 home-page p-5">
              <img src={undraw_business_chat_re_gg4h} className="img-fluid" />
            </div>
            <div className="col-lg-6 home-page p-3">
              <h3> {homeSectionData.mainTitle} </h3>
              <p> {homeSectionData.mainText}</p>
              <button className="home-btn" onClick={handleStartReding}>
                {homeSectionData.buttonText}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
