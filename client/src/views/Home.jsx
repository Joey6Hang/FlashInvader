import React, { Component } from "react";
import APIHandler from "../api/APIHandler";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Tabs, Tab,Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";



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
        console.error(err);
      });
  };

  handleDelete = async (id) => {
    try {
      await APIHandler.delete(`/invaders/${id}`);
      this.fetchInvaders();
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount() {
    this.fetchInvaders();
  }

  render() {
    const { invaders } = this.state;
    return (
      <div className="invader-list-wrap">
        <img src="/images/application-flash-invaders.jpeg" alt="img" width="100%" height= "280"></img>
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
                <div class="col" key={i} >
                  <Link to={{pathname:`/invader/${invader._id}`,
                  invaderId: invader._id}}>
                  <img
                    srv={invader.photo}
                    alt="invader"
                    width="180px"
                    height="270px"
                  />  
                  </Link>
                </div>
              ))}
          </div>
          </div>
    )}
      </div>
      );
    }
  }