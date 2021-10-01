import React, { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";

function Login() {
  const { state } = useLocation();
  const { from } = state || { from: { pathname: "/" } };
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  console.log("RUNNING LOGIN");
  console.log("LOADING 0: ", isLoading);

  const login = () => {
    setIsLoading(true);
    fakeAuth.authenticate(() => {
      setIsLoading(false);
      setRedirectToReferrer(true);
    });
  };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>You must log in to view the page at {from.pathname}</p>
          <button onClick={login}>Log in</button>
        </>
      )}
    </div>
  );
}

/* A fake authentication function */
export const fakeAuth = {
  isAuthenticated: false,
  authenticate: function (cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 1000);
  },
};

export default Login;
