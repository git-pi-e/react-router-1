import { useState } from "react";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";

export default function Profile() {
  const [cookies, setCookie, removeCookie] = useCookies(["login-info"]);
  const [loggedIn, setLoggedIn] = useState(true);

  const handleClick = () => {
    removeCookie("email");
    removeCookie("password");
    setLoggedIn(false);
  };
  return (
    <div>
      {!loggedIn ? <Redirect to="/login" /> : null}
      <h1>My profile</h1>
      <h3>My password</h3>
      <button onClick={handleClick}>log out</button>
    </div>
  );
}
