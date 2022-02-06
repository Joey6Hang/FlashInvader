import React, { Component } from "react";
import APIHandler from "../api/APIHandler";
import "nes.css/css/nes.min.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default class Create extends Component {
  state = {
  id:"",
  address:"",
  photo: "",
  point: 0,
  Supplementary:"",
  arrondissement:0
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await APIHandler.post("/api/invaders", this.state);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
      return (
          <form>
              <h1>create a new</h1>
              <input
                id="name"
                type="text"
                placeholder="id"
                onChange={this.handleChange}
              ></input>
              <input
                address="name"
                type="text"
                placeholder="address"
                onChange={this.handleChange}
              ></input>
              <div class="input-group">
              <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={this.handleChange}></input>
                  <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                </div>
              <input
                point="number"
                type="number"
                placeholder="point"
                onChange={this.handleChange}
              ></input>
              <input
                Supplementary="name"
                type="text"
                placeholder="Supplementary"
                onChange={this.handleChange}
              ></input>
              <input
                arrondissement="name"
                type="number"
                placeholder="arrondissement"
                onChange={this.handleChange}
              ></input>
               <button onClick={this.handleSubmit}>ok</button>

          </form>
      )
  }
}