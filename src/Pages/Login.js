import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [error, setError] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies(["login-info"]);

  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log(email);
    console.log(password);
    if (email === "bhardwajarpit24@gmail.com" && password === "cteclass") {
      setCookie("email", email);
      setCookie("password", password);
      setLoggedIn(true);
    } else setError(true);
  };

  return (
    <div>
      {loggedIn ? <Redirect to="/profile" /> : null}
      <div>
        <input
          onChange={handleEmail}
          value={email}
          type="email"
          placeholder="email"
        ></input>
        <input
          onChange={handlePassword}
          value={password}
          type="password"
          placeholder="password"
        ></input>
      </div>
      {error ? <p>Email or password is incorrect</p> : null}
      <button onClick={handleLogin}>log in</button>
    </div>
  );
}
