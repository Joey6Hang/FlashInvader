import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Router } from "react-router-dom";
import IconAvatarAdmin from "../component/icon/IconAvatarAdmin";
import { useAuth } from "../auth/useAuth";
import "./../styles/nav.css";
import "./../styles/icon-avatar.css";

export default function Navi() {
  const { currentUser, isLoggedIn} = useAuth();
  console.log(currentUser);
  return (
    <div>
      <ul class="nav justify-content-end" id="nav">
        <li id="logo">
          <a aria-current="page" href="/">
            <img
              src="/images/logo1.png"
              alt="logo"
              width="70"
              height="70"
            ></img>
          </a>
        </li>

        {isLoggedIn && (
          <>
            <li class="nav-item">
              <a
                class="nav-link active"
                id="create"
                aria-current="page"
                href="/dashboard"
              >
            <IconAvatarAdmin avatar = {currentUser.avatar} />
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link active"
                id="create"
                aria-current="page"
                href="/create"
              >
                create
              </a>
            </li>
          </>
        )}

        {!isLoggedIn && (
          <>
            <li class="nav-item">
              <a class="nav-link" href="/signin" id="create">
                Signin
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/signup" id="create">
                Signup
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
