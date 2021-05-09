import { useCookies } from "react-cookie";

export default function Profile() {
  const [cookies, setCookie, removeCookie] = useCookies(["login-info"]);

  const handleClick = () => {
    removeCookie("email");
    removeCookie("password");
  };
  return (
    <div>
      <h1>My profile</h1>
      <h3>My password</h3>
      <button onClick={handleClick}>log out</button>
    </div>
  );
}
