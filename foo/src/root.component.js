import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import routes from "./route";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Link to="/login">Login</Link>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* 之前写法 
      <Switch>
        <Route path="/home"><Home /></Route>
      </Switch>
    */}
      <Switch>
        <Route path="/login" component={Login}></Route>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <route.component {...props} route={route.routes} />
            )}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
