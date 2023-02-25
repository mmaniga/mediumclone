import React from "react";

import "../../style.css";
import Copyright from "./Copyright";
import HomeSection from "./HomeSection";
import MemberSection from "./MemberSection";
import NavBar from "./NavBar";
import Story from "./Story";
const MediumClone = () => {
  const handleMediumOnClick = () => {
    console.log("Medicum Clicked...");
  };

  const handleStartReding = () => {
    console.log("start reading clicked");
  };

  return (
    <>
      <title>Medium Projects</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="css/style.css" />
      <NavBar></NavBar>
      <HomeSection></HomeSection>
      <Story></Story>
      <MemberSection></MemberSection>
      <Copyright></Copyright>
    </>
  );
};

export default MediumClone;
