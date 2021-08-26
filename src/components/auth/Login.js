import React, { useState, useContext } from "react";
import Navbar from "../partials/Navbar";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { getLoggedIn } = useContext(AuthContext);

  async function loginHandler(e) {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };

      await axios.post("http://localhost:5000/auth/login", loginData, {
        withCredentials: true,
      });
      await getLoggedIn();
      history.push("/home");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="login-page">
        <div className="login-box">
          <div className="login-logo">
            <b>Sales Manager</b>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign into Application</p>
              <form onSubmit={loginHandler}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 ml-auto mr-auto">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
