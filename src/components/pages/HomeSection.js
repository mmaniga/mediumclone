import React from "react";

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
              <img
                src="image/undraw_business_chat_re_gg4h.svg"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 home-page p-3">
              <h3> established </h3>
              <p>
                {" "}
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </p>
              <button className="home-btn" onClick={handleStartReding}>
                {" "}
                Start reading{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
