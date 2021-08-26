import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogoutBtn from "../auth/LogoutBtn";

export default function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Sales Manager
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {loggedIn === false && (
              <>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="login"
                >
                  Login
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="register"
                >
                  Register
                </Link>
              </>
            )}

            {loggedIn === true && (
              <>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
                <LogoutBtn />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
