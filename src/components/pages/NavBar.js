import React from "react";

const NavBar = () => {
  const handleMediumOnClick = () => {
    console.log("Medicum Clicked...");
  };

  const handleStartReding = () => {
    console.log("start reading clicked");
  };
  return (
    <>
      {/*  --------  Header Section  ----------  */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span>Bangalore Dynamics </span> Logo
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
                <a className="nav-link" href="#">
                  {" "}
                  Our story{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/Membership"
                  onClick={handleMediumOnClick}
                >
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
    </>
  );
};

export default NavBar;
