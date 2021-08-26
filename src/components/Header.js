import React from "react";
import { Link } from "react-router-dom";
import LogoutBtn from "./auth/LogoutBtn";

export default function Header() {
  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="#"
              className="nav-link"
              data-widget="pushmenu"
              role="button"
            >
              <i className="fas fa-bars" />
            </Link>
          </li>
          <li className="nav-item">
            <LogoutBtn />
          </li>
        </ul>
      </nav>
    </>
  );
}
