import React, { useState, useContext, useEffect } from "react";

import { Link } from "react-router-dom";
// custom tools
import UserContext from "../auth/UserContext";
import APIHandler from "../api/APIHandler";
import "nes.css/css/nes.min.css";

export default function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser, currentUser } = useContext(UserContext);

  useEffect(() => {
    if (currentUser) props.history.push("/dashboard");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiRes = await APIHandler.post("/signin", { email, password });
      setCurrentUser(apiRes.data.currentUser);
      props.history.push("/dashboard"); // redirect to dashboard
    } catch (err) {
      setCurrentUser(null);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
    <br/>
      <h1 className="title">Signin</h1>
    <br/>

      <div class="nes-field is-inline">
        <label for="name_field">Email</label>
        <input className="input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        class="nes-input"/>
      </div>
      <br/>

      <div class="nes-field is-inline">
      <label for="error_field">password</label>
      <input className="input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         id="error_field" 
         class="nes-input is-error" 
         placeholder="123?"/>
      </div>
      <br/>

      <button type="submit" class="nes-btn is-success">Signin</button>
      <br/>

      <p className="parag">
        No account yet ? please{" "}
        <Link to="/signup" className="link">
          signup
        </Link>
      </p>
    </form>
  );
}
