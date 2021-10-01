import React from "react";
import { useLocation, Route, Redirect } from "react-router-dom";
import { fakeAuth } from "../Login/Login";

function PrivateRoute({ component: Component, ...rest }) {
  const location = useLocation();

  return (
    <Route {...rest}>
      {fakeAuth.isAuthenticated === true ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
}

export default PrivateRoute;
