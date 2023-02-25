import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

import "../../App.css";
import BackgroundImage from "../../assets/images/bg.png";

export default function LandingPage() {
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
      <header style={HeaderStyle}>
        <h4 className="text-center">Dream Destinations</h4>
        <p className="text-center">For Premium Content Subscribe</p>
        <div className="buttons text-center">
          <button
            className="primary-button"
            onClick={() => loginWithRedirect()}
          >
            Subscribe Me
          </button>
        </div>
      </header>
    );
  } else {
    return (
      <header style={HeaderStyle}>
        <h4 className="text-center">Exclusive Travel</h4>
        <p className=" text-center">
          Your Preimum Travel Discovery journery here...
        </p>
        <div className="buttons text-center">
          <div>Hello {user.name} </div>
          <div>
            <button
              className="primary-button"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log out
            </button>
          </div>
        </div>
      </header>
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
