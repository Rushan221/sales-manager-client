import React, { useContext } from "react";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./Dashboard";
import ItemCreate from "./items/ItemCreate";
import ItemList from "./items/ItemList";
import Welcome from "./Welcome";
import Home from "./Home";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Router() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Welcome} />

          {loggedIn === false && (
            <>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </>
          )}

          {loggedIn === true && (
            <>
              <Home>
                <Header />
                <Sidebar />
                <Route path="/home" component={Dashboard} />
                <Route path="/items" component={ItemList} />
                <Route path="/item/create" component={ItemCreate} />
              </Home>
            </>
          )}
        </Switch>
      </BrowserRouter>
    </>
  );
}
