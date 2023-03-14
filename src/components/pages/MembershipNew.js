import React from "react";  
import PropTypes from "prop-types";
import "../../style.css";

import facebookImage from "../../assets/images/facebook.png";
import googleImage from "../../assets/images/google.png";
import twitterImage from "../../assets/images/twiter.png";
import linkedImage from "../../assets/images/linkedin.png";
import mearcaImage from "../../assets/images/Mearca.png";
import signInImage from "../../assets/images/sign_img.png";

const MembershipNew = (props) => {
  return (
    <>
      <section id="sign-in">
        <div class="container mb-2">
          <div class="row mb-4 pb-4 pt-4">
            <div class="col-lg-6 col-md-6 col-sm-1">
              <img src={signInImage} class="img-fluid" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-1 px-2">
              <p>
                <a href="#">Click here</a> to see all brands that offer you
                Discounts for your data. You could choose to accept all or any
                of these.
              </p>

              <h4 class="sub-title"> Sign Up With Mearca Signing </h4>

              <div class="d-flex justify-content-start pt-5">
                <div class="mu-btn">
                  <img src={googleImage} class="img-fluid" /> Google{" "}
                </div>
                <div class="mu-btn">
                  <img src={facebookImage} class="img-fluid" /> Facebook{" "}
                </div>
                <div class="mu-btn">
                  <img src={twitterImage} class="img-fluid" /> Twitter{" "}
                </div>
                <div class="mu-btn">
                  <img src={linkedImage} class="img-fluid" /> Linkedin{" "}
                </div>
              </div>

              <p class="text-center pt-4"> or E-Mail Address </p>

              <form>
                <label for="formControlInput" class="form-label pt-2">
                  {" "}
                  Email{" "}
                </label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control form-control-r "
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="input-group-right"
                  />
                  <span class="input-group-text" id="input-group-right-example">
                    <i class="fa-regular fa-envelope"></i>
                  </span>
                </div>
                <label for="formControlInput" class="form-label pt-2 ">
                  Password
                </label>
                <div class="input-group pb-2">
                  <input
                    type="password"
                    class="form-control form-control-r "
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="input-group-right"
                  />
                  <span class="input-group-text" id="input-group-right-example">
                    {" "}
                    <i class="fa-regular fa-eye"></i>{" "}
                  </span>
                </div>
                <p class="text-center py-2">
                  {" "}
                  By signing up, you consent to check your{" "}
                  <a href=""> Eligibillity with TransUnion </a>{" "}
                </p>
                <button
                  class="sign-up-btn"
                  href="sign_in_otp.html"
                  type="button"
                >
                  {" "}
                  Sign Up
                </button>
                <p class="text-center pt-3">
                  You can <a href="sign_in_otp.html">Opt</a> out at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

MembershipNew.propTypes = {};

export default MembershipNew;
