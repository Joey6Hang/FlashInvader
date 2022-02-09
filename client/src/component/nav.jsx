import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link , Router} from "react-router-dom";
// import IconAvatarAdmin from "../components/icon/IconAvatarAdmin";
// import { useAuth } from "../auth/useAuth";


export default function Navi() {    
      // const { isLoggedIn } = useAuth();

        return(
          <div>
          <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/create">create</a>
          </li>
        
            <>
          <li class="nav-item">
            <a class="nav-link" href="/signin">Signin</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup">Signup</a>
          </li>
          </>
          
        </ul>
        </div>
        )
    }

