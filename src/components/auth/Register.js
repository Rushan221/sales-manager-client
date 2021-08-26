import axios from "axios";
import React, { useState, useContext } from "react";
import Navbar from "../partials/Navbar";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setpasswordVerify] = useState("");
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function registerHandler(e) {
    e.preventDefault();
    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };

      await axios.post("http://localhost:5000/auth/", registerData, {
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

      <div className="register-page">
        <div className="register-box">
          <div className="register-logo">
            <b>Sales Manager</b>
          </div>
          <div className="card">
            <div className="card-body register-card-body">
              <p className="login-box-msg">Register a User</p>
              <form onSubmit={registerHandler}>
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
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Retype password"
                    onChange={(e) => setpasswordVerify(e.target.value)}
                    value={passwordVerify}
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
                      Register
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
