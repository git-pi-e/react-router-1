import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";

import About from "./Pages/About";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import { useCookies } from "react-cookie";
import MenuBar from "./Components/MenuBar";

const defaultOperations = {
  a: 1,
  b: 2,
  c: 3,
  addValues: (a, b, c) => {
    return a + b + c;
  },
};

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(defaultOperations.addValues(5, 6, 7));
  const [cookies, setCookie, removeCookie] = useCookies(["login-info"]);

  useEffect(() => {
    cookies.email && cookies.password ? setLoggedIn(true) : setLoggedIn(false);
  }, []);

  return (
    <Router>
      {!(cookies.email && cookies.password) ? <Redirect to="/login" /> : null}
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <MenuBar title="About" />
            <About />
          </Route>
          <Route path="/profile">
            <MenuBar title="Profile" />
            <Profile />
          </Route>
          <Route exact path="/">
            <MenuBar title="Home" />
            <Home />
          </Route>
          <Route path="/login">
            <MenuBar title="Login" />
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
