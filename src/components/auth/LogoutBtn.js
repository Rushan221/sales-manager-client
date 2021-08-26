import React, { useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function LogoutBtn() {
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  async function logout() {
    await axios.get("http://localhost:5000/auth/logout");
    await getLoggedIn();
    history.push("/");
  }
  return (
    <Link to="#" className="nav-link active" onClick={logout}>
      Logout
    </Link>
  );
}
