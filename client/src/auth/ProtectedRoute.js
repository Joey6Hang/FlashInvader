import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./useAuth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  
  const { isLoggedIn, isLoading } = useAuth();
  // return default template while performing async auth task
  if (isLoading) return <div>Loading...</div>;
  return isLoggedIn ? (
    
    // if logged in, return a regular Route component
    // this Route gets any passed (...rested) props in a literal object
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    // if not logged in redirect to signin
    <Redirect to="/signin" />
    
  );
};
