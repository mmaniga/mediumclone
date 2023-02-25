import React from "react";
import "../../style.css";

import fewcents_logo_w from "../../assets/images/fewcents_logo_w.png";
import fewcents_logo_c from "../../assets/images/fewcents_logo_c.png";
import mearca_logo from "../../assets/images/Mearca.png";
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
      {/*  --------  Header Section  ----------  */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span>M MK </span> Logo
          </a>
          <a
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  {" "}
                  Our story{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  Membership{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  Write{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  Sign In{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  Contact Me{" "}
                </a>
              </li>
            </ul>
            <button className="get-btn"> Get started </button>
          </div>
        </div>
      </nav>
      {/*  --------  Header Section End  ----------  */}
      {/*  --------  Premium Membership Section  ----------  */}
      <section id="premium-membership">
        <div className="container mb-2">
          <div className="row mb-4 pb-4">
            <div className="col-lg-3 col-md-2 col-sm-1"></div>
            <div className=" col-lg-6  col-md-8 col-sm-10 pt-4 pb-2 ">
              <div className="pm-box px-4 pt-4">
                <div className="pt-2">
                  <img src={mearca_logo} width={100} className="img-fluid" />{" "}
                </div>
                <p>
                  I am of Lorem Ipsum available, but the majority have suffered
                  alteration. Ipsum available members caption{" "}
                </p>
                <hr />
                <div className="d-flex justify-content-around">
                  <a className="amount-btn"> INR 99 </a>
                  <a className="amount-btn active"> INR 200 </a>
                  <a className="amount-btn"> INR 300 </a>
                </div>
                <p>Sing in with </p>
                <div className="d-flex justify-content-around mb-2">
                  <a className="account-btn">
                    <i className="fa-brands fa-apple" /> Apple{" "}
                  </a>
                  <a className="account-btn">
                    <i className="fa-brands fa-google" /> Google{" "}
                  </a>
                  <a className="account-btn">
                    <i className="fa-brands fa-facebook" /> Facebook{" "}
                  </a>
                </div>
                <div className="d-flex justify-content-around">
                  <a className="email-account-btn">
                    <i className="fa-solid fa-user" /> Guest{" "}
                  </a>
                  <a className="email-account-btn">
                    <i className="fa-sharp fa-solid fa-envelope" /> E-mail{" "}
                  </a>
                </div>
                <div className="checkbox text-start tc-box pb-1">
                  <input
                    id="checkbox1"
                    className="btn-che"
                    type="checkbox"
                    defaultChecked=""
                  />
                  <label>
                    I am of Lorem Ipsum available, but the majority have
                    suffered alteration. Ipsum available members caption{" "}
                  </label>
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
