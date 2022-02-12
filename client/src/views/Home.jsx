import React, { Component } from "react";
import APIHandler from "../api/APIHandler";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Tabs, Tab,Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../styles/home.css"


export default class Home extends Component {
  state = {
    invaders: [],
  };

  fetchInvaders = async () => {
    APIHandler.get("/invaders")
      .then(({ data }) => {
        this.setState({
            invaders: data,
        });
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  // handleDelete = async (id) => {
  //   try {
  //     await APIHandler.delete(`/invaders/${id}`);
  //     this.fetchInvaders();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  componentDidMount() {
    this.fetchInvaders();
  }

  render() {
    const { invaders } = this.state;
    return (
      <div className="invader-list-wrap">
        <img src="/images/application-flash-invaders.jpeg" alt="img" width="100%" height= "280"></img>
        <img src="/images/pac-man1.gif" width="100%" height="130"></img>
        <h1>Invaders</h1>
        {!this.state.invaders.length? (
          <div className="jiazai">
          Waiting  
            <Spinner animation="grow" variant="dark" size="sm"/>
            <Spinner animation="grow" variant="dark" size="sm"/>
            <Spinner animation="grow" variant="dark" size="sm"/>
            <Spinner animation="grow" variant="dark" size="sm"/>
            <Spinner animation="grow" variant="dark" size="sm"/>
          </div>
        ) :(
          <div class='container'>
          <div class="row">
              {[...invaders].map((invader, i) => (
                <div class="col" key={i} id="home">
                  <Link to={{pathname:`/invader/${invader._id}`,
                  invaderId: invader._id}} id="link">
                  <img
                    src={invader.photo}
                    alt="invader"
                    width="120px"
                    height="120px"
                  />
                  <span id="text">Paris{invader.arrondissement}e</span>  
                  </Link>
                </div>
              ))}
          </div>
          </div>
    )}
    <img src="/images/pac-man2.gif" width="100%" height="120"></img>
      </div>
      );
    }
  }
