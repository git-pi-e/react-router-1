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

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies(["login-info"]);

  useEffect(() => {
    cookies.email && cookies.password ? setLoggedIn(true) : setLoggedIn(false);
  }, []);

  return (
    <Router>
      {!(cookies.email && cookies.password) ? <Redirect to="/login" /> : null}
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </nav>

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
