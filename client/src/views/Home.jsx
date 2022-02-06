import React, { Component } from "react";
import APIHandler from "../api/APIHandler";

export default class Home extends Component {
  state = {
    invaders: [],
  };

  fetchInvaders = async () => {
    APIHandler.get("/api/invaders")
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
      await APIHandler.delete(`/api/invaders/${id}`);
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
        <h1>all invaders</h1>
        <ul className="list">
          {invaders.map((invader, i) => (
            <li className="item" key={i}>
              <span>{invader.name}</span>
              <div className="buttons">
                <button onClick={() => this.props.handler(invader._id, "details")}>
                  details
                </button>
                <button onClick={() => this.props.handler(invader._id, "update")}>
                  update
                </button>
                <button onClick={() => this.handleDelete(invader._id)}>
                  delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
