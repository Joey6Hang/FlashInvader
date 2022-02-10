import './App.css';
// import InvaderCreat from './views/InvaderCreat'
import "nes.css/css/nes.min.css";
import Navi from "./component/nav"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Create from "./views/InvaderCreat";
import Home from "./views/Home"
import Signin from './views/Signin';
import Signup from './views/Signup';
import Details from './views/Detail';
import Update from './views/InvaderUpdate';

function App() {
  return (
    <div className="App">
      <Navi />
       <main id="content_main">
       <BrowserRouter>
         <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} /> 
          <Route path="/create" component={Create} />
          <Route path="/invader/:id" component={Details} />
          <Route path="/update/:id" component={Update} />
         </Switch>
         </BrowserRouter>
       </main>
    </div>
  );
}

export default App;
