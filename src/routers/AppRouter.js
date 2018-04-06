import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";  
import Header from "../component/header";
import Dashboard from "../component/dashboard";
import Add from "../component/add";
import Edit from "../component/Edit";
import Help from "../component/Help";
import Notfound from "../component/Notfound";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/create" component={Add} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/help" component={Help} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
  
