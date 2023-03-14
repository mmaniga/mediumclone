import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";

import "./App.css";
import MediumClone from "./components/pages/MediumClone";
import Membership from "./components/pages/Membership";
import MembershipNew from "./components/pages/MembershipNew";
import SimpleMembership from "./components/pages/SimpleMembership";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MediumClone} />
          <Route exact path="/Membership" component={SimpleMembership} />
          <Route exact path="/ourStory" component={MediumClone} />
          <Route exact path="/writeStory" component={MediumClone} />
          <Route exact path="/login" component={MediumClone} />
          <Route exact path="/contactUs" component={MediumClone} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

//          <!-- <Route exact path="/" component={LandingPage} /> -->
