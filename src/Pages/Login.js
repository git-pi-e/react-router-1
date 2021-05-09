import { useState } from "react";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [cookies, setCookie, removeCookie] = useCookies(["login-info"]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log(email);
    console.log(password);
    setCookie("email", email);
    setCookie("password", password);
  };

  return (
    <div>
      {cookies.email && cookies.password ? <Redirect to="/profile" /> : null}
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
      <button onClick={handleLogin}>log in</button>
    </div>
  );
}
