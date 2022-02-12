import React, { useState } from "react";
import './App.css';
import "nes.css/css/nes.min.css";
import Navi from "./component/nav"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Create from "./views/InvaderCreat";
import Home from "./views/Home"
import Signin from './views/Signin';
import Signup from './views/Signup';
import Details from './views/Detail';
import Update from './views/InvaderUpdate';
import Dashboard from "./views/Dashboard";
import About from "./views/About";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import UserContext from "./auth/UserContext";
import { useAuth } from "./auth/useAuth";


export default function App() {
  
  const { isLoading } = useAuth(); // custom hook, cooked with love by frankles + me
  const [currentUser, setCurrentUser] = useState({});
  const UserContextValue = {
    currentUser,
    setCurrentUser,
  };
  return (
    <UserContext.Provider value={UserContextValue}>
    <div className="App">
    {isLoading ? null : (
        <React.Fragment>
      <Navi />
       <main id="content_main">
       <BrowserRouter>
         <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} /> 
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute path="/create" component={Create} />
          <ProtectedRoute path="/update/:id" component={Update} />
          <ProtectedRoute path="/delete/:id"/>
          <Route path="/invader/:id" component={Details} />
          <Route path="/about" component={About} />
         </Switch>
         </BrowserRouter>
       </main>
       </React.Fragment>
    )}
    </div>
    </UserContext.Provider>

  );
}