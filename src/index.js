import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-brwz8lpsjc0wpz0i.us.auth0.com"
    clientId="F3kCwkrcTwHacOtXzA4WpFLYgKjNdog8"
    audience="https://dev-brwz8lpsjc0wpz0i.us.auth0.com/api/v2/"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
