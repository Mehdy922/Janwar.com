import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/user" component={Admin} />
      <Route path="/auth" component={Auth} />
      <Route path="/home" exact component={Landing} />
      <Redirect from="*" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
