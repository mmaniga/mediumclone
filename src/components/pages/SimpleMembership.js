import React from "react";
import PropTypes from "prop-types";
import "../../style.css";

import { useAuth0 } from "@auth0/auth0-react";

import signInImage from "../../assets/images/sign_img.png";
import BackgroundImage from "../../assets/images/bg.png";

export default function SimpleMembership() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (!isAuthenticated) {
    return (
      <>
        <section id="sign-in">
          <div class="container mb-2">
            <div class="row mb-4 pb-4 pt-4">
              <div class="col-lg-6 col-md-6 col-sm-1">
                <img src={signInImage} class="img-fluid" />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-1 px-2">
                <h4 class="sub-title"> Sign Up With Mearca Signing </h4>

                <form>
                  <p class="text-center py-2">
                    By signing up, you consent to check your{" "}
                    <a href=""> Eligibillity with TransUnion </a>{" "}
                  </p>
                  <button
                    class="sign-up-btn"
                    href="sign_in_otp.html"
                    type="button"
                    onClick={() => loginWithRedirect()}
                  >
                    SignUp / Login
                  </button>
                  <p class="text-center pt-3">You can opt out at any time.</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section id="sign-in">
          <div class="container mb-2">
            <div class="row mb-4 pb-4 pt-4">
              <div class="col-lg-6 col-md-6 col-sm-1">
                <img src={signInImage} class="img-fluid" />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-1 px-2">
                <h4 class="sub-title"> Welcome to Premium Membership </h4>
                <p>
                  <a href="#">Click here</a> to see all brands that offer you
                  Discounts for your data. You could choose to accept all or any
                  of these.
                </p>

                <div class="col-lg-6 col-md-6 col-sm-1 px-2">
                  <form>
                    <button
                      class="sign-up-btn"
                      href="sign_in_otp.html"
                      type="button"
                      onClick={() =>
                        logout({ returnTo: window.location.origin })
                      }
                    >
                      Logout
                    </button>
                    <p class="text-center pt-3">You can opt in at any time.</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
