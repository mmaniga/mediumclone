import React from "react";
import "../../style.css";

import fewcents_logo_w from "../../assets/images/fewcents_logo_w.png";
import fewcents_logo_c from "../../assets/images/fewcents_logo_c.png";
import mearca_logo from "../../assets/images/Mearca.png";
import NavBar from "./NavBar";
import { membershipDetails } from "../../data";

function Membership() {
  return (
    <>
      <title>Mani Projects</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
      />
      <NavBar></NavBar>
      <section id="premium-membership">
        <div className="container mb-2">
          <div className="row mb-4 pb-4">
            <div className="col-lg-3 col-md-2 col-sm-1"></div>
            <div className=" col-lg-6  col-md-8 col-sm-10 pt-4 pb-2 ">
              <div className="pm-box px-4 pt-4">
                <div className="pt-2">
                  <img src={mearca_logo} width={100} className="img-fluid" />{" "}
                </div>
                <p>{membershipDetails.titleText} </p>
                <hr />
                <div className="d-flex justify-content-around">
                  {membershipDetails.plan.map((p) => {
                    return <a className={p.aClassName}> {p.planId} </a>;
                  })}
                </div>
                <p>Sing in with </p>
                <div className="d-flex justify-content-around mb-2">
                  {membershipDetails.signInOptions.map((pp) => {
                    return (
                      <a className={pp.aClassName}>
                        <i className={pp.iClassName} />
                        {pp.provideId}
                      </a>
                    );
                  })}
                </div>
                <div className="checkbox text-start tc-box pb-1">
                  <input
                    id="checkbox1"
                    className="btn-che"
                    type="checkbox"
                    defaultChecked=""
                  />
                  <label>{membershipDetails.consentText}</label>
                </div>
                <div className="pm-footer pb-2">
                  <div className="px-4 pt-4 ">
                    <div className="d-flex justify-content-around">
                      <a className="pm-card-btn">
                        <i className="fa-solid fa-credit-card" />
                      </a>
                      <a className="pm-card-btn">
                        <i className="fa-brands fa-cc-visa" />
                      </a>
                      <a className="pm-card-btn">
                        <i className="fa-brands fa-cc-mastercard" />
                      </a>
                      <a className="pm-card-btn">
                        <i className="fa-regular fa-credit-card" />
                      </a>
                      <a className="pm-card-btn">
                        <i className="fa-brands fa-cc-amex" />
                      </a>
                      <a>
                        <img
                          src={mearca_logo}
                          width={45}
                          height={30}
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="pm-join px-4 py-2 my-2 text-start">
                    <i className="fa-solid fa-shield-halved" />
                    <div className="pm-join-tc">
                      Ipsum available <a href=""> alteration</a> &amp;{" "}
                      <a href=""> members </a> I am of Lorem Ipsum available,
                      but the majority have suffered alteration.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-1"></div>
          </div>
        </div>
      </section>
      {/*  --------  Premium Membership Section End  ----------  */}
      {/*  --------  Footer Section  ----------  */}
      <div id="footer">© Copyright 2011-2023 All rights reserved. </div>
      {/*  --------  Footer Section End ----------  */}
      {/*  --------  js  ----------  */}
    </>
  );
}

export default Membership;
