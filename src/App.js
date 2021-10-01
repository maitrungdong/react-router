import React from "react";

import "./App.css";

import { Switch, Route, Link } from "react-router-dom";
import Category from "./components/Category/Category";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import Admin from "./components/Admin/Admin";

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <PrivateRoute path="/admin" component={Admin} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
