import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Settings from "views/admin/Settings.js";
import Automaton from "views/admin/Automaton.js";
import Language from "views/admin/Language.js";

export default function Admin() {
  return (
    <>
      
      <div className={`relative bg-blueGray-100`}>
      
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/user/dashboard" exact component={Dashboard} />
            <Route path="/user/settings" exact component={Settings} />
            <Route path="/user/automaton" exact component={Automaton} />
            <Route path="/user/language" exact component={Language} />
            <Redirect from="/user" to="/user/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
