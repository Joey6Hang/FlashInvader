import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import IconAvatarAdmin from "../components/icon/IconAvatarAdmin";
import create from "../views/InvaderCreat"

class Navi extends Component {
    render(){
        return(
          <div>
          <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/create">create</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup">signup</a>
          </li>
        </ul>
        </div>
        )
    }
}

export default Navi