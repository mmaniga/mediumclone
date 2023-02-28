import React from "react";
import { navBarData } from "../../data";

const NavBar = () => {
  const handleMediumOnClick = () => {
    console.log("Medicum Clicked...");
  };

  const handleStartReding = () => {
    console.log("start reading clicked");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span>Bangalore Dynamics </span>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0">
              {navBarData.map((navItem) => {
                return (
                  <li className="nav-item">
                    <a className="nav-link" href={navItem.linkPage}>
                      {navItem.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <button className="get-btn"> Get started </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
