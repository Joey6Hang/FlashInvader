import { useState, useEffect, useContext } from "react";
import APIHandler from "../api/APIHandler";
import UserContext from "./UserContext";

// https://reactjs.org/docs/hooks-custom.html

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const userContext = useContext(UserContext);
  const { setCurrentUser, currentUser } = userContext;

  useEffect(() => {
    APIHandler.get("/is-loggedin")
      .then((res) => {
        setIsLoggedIn(true);
        setIsLoading(false);
        setCurrentUser(res.data.currentUser);
      })
      .catch(() => {
        setCurrentUser(null);
        setIsLoggedIn(false);
        setIsLoading(false);
      });
  }, [setCurrentUser]);

  // isLoggedIn => true || false
  // isLoading => true || false
  // currentUse => null || {...infos}
  return { isLoggedIn, isLoading, currentUser };
  // those 3 returned values are accessible anywhere in the app > child > child ....
  // as soon as you import the useAuth hook
};
