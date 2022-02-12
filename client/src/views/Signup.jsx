import React, { Component } from "react";
import { Link } from "react-router-dom";
import APIHandler from "../api/APIHandler";
import IconAvatarAdmin from "../component/icon/IconAvatarAdmin";
//import authService from "../auth/service"
// styles 
import "./../styles/icon-avatar.css";
import "./../styles/icon-avatar.css";


export default class Signup extends Component {
  state = {
    avatar: "",
    username: "",
    email: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const fd = new FormData();
    // create a form data (programatic form, to send the file as binary)
    fd.append("email", this.state.email);
    fd.append("password", this.state.password);
    fd.append("username", this.state.username);
    fd.append("avatar", this.state.avatar);

    try {
      await APIHandler.post("/signup", fd);
      console.log("fd"+fd,"this.state" + this.state);
      this.props.history.push("/signin");
    } catch (err) {
      console.error(err);
    }
  };
    //   const {username, password, avatar, mail} = this.state;
    //   authService.signup(username, password, avatar, mail)
    //   .then(createdUser => {
    //       this.setState({
    //           mail:"",
    //           username: "",
    //           password: "",
    //           avatar: "",
    //       });
    //   })
    //   .catch(error => console.log(error))
    // }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImage = e => {
    // console.log("Signup@handle image", e.target.files[0]);
    this.setState({ avatar: e.target.files[0] }, () => {
      const reader = new FileReader();
      reader.onloadend = () => {
        // when the fileREader ends  ...
        const baseString = reader.result; // get the image as a base64 encoded string
        // console.log(baseString)
        this.setState({ avatar: baseString }); // set the tmp avatar as an image source before upload
        console.log(baseString);
      };
      reader.readAsDataURL(this.state.avatar); // read the file from the local disk
    });
  };
  

  render() {
    const { email, password, username, avatar } = this.state;
    return (
      <React.Fragment>
        <form
          className="form" onSubmit={this.handleSubmit}
        >
        <br/>
          <h1 className="title">Signup</h1>
        <br/>

        <label className="label" id="avatar" htmlFor="avatar">
          <IconAvatarAdmin avatar={avatar} clbk={this.handleImage} />
          </label>
          <br/>

        <div class="nes-field">
        <label for="name_field">Email</label>
        <input className="input"
        type="email"
        name="email"
        class="nes-input"
        defaultValue={email}
        onChange={this.handleChange}
        />
        </div>
        <br/>

          <div class="nes-field">
          <label for="warning_field">Username</label>
          <input 
            type="text" 
            id="warning_field" 
            name="username"
             class="nes-input is-warning" 
             defaultValue={username}
             onChange={this.handleChange}
          />
        </div>
        <br/>

          <div class="nes-field">
          <label for="error_field">password</label>
          <input className="input"
            type="password"
            id="error_field" 
            class="nes-input is-error" 
            name="password"
            defaultValue={password}
            onChange={this.handleChange}
            />
          </div>
          <br/>

        <button type="submit" class="nes-btn is-success">Signup</button>
        <br/>

        </form>
        <p className="parag">
          Already a member ? please{" "}
          <Link to="/signin" className="link">
            signin
          </Link>
        </p>
      </React.Fragment>
    );
  }
}
