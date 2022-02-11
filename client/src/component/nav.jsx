import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link , Router} from "react-router-dom";
// import IconAvatarAdmin from "../components/icon/IconAvatarAdmin";
// import { useAuth } from "../auth/useAuth";
import "./../styles/nav.css"


export default function Navi() {    
      // const { isLoggedIn } = useAuth();

        return(
          <div>
          <ul class="nav justify-content-end" id="nav">
          <li id="logo">
            <a aria-current="page" href="/">
              <img src="/images/logo1.png" alt="logo" width='70' height='70' ></img>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" id="create" aria-current="page" href="/create" >create</a>
          </li>
        
            <>
          <li class="nav-item">
            <a class="nav-link" href="/signin" id="create">Signin</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup" id="create">Signup</a>
          </li>
          </>
          
        </ul>
        </div>
        )
    }

