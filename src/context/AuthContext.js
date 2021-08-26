import axios from "axios";
import React, { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  async function getLoggedIn() {
    const loggedInResponse = await axios.get(
      "http://localhost:5000/auth/logged-in"
    );

    setLoggedIn(loggedInResponse.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
