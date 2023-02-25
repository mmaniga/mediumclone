import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";

import "./App.css";
import MediumClone from "./components/pages/MediumClone";
import Membership from "./components/pages/Membership";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MediumClone} />
          <Route exact path="/Membership" component={Membership} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

//          <!-- <Route exact path="/" component={LandingPage} /> -->
