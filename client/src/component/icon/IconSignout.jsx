import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import APIHandler from "../../api/APIHandler";
import UserContext from "../../auth/UserContext";

export default withRouter(function IconSignout(props) {
  const userContext = useContext(UserContext);
  const { setCurrentUser } = userContext;

  const handleSignout = (e) =>
  APIHandler.post("/signout").finally(() => {
    props.history.push("/")
    e.preventdefault()
      setCurrentUser(null);
    });

  return (
    <FontAwesomeIcon
      onClick={handleSignout}
      className="link icon-signout is-clickable"
      icon={faSignOutAlt}
      size="s"
      title="signout"
    />
  );
})
