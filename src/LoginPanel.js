import React, { Component } from "react";
import axios from "axios";
import { BACKEND_URL } from "./constants";

class LoginPanel extends Component {
  state = {
    username: "someone",
    password: "some_secret"
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <div>
            username:{" "}
            <input
              id="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </div>
          <div>
            password:{" "}
            <input
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    );
  }

  login = async event => {
    event.preventDefault();
    const response = await axios.post(
      `${BACKEND_URL}/login`,
      { username: this.state.username, password: this.state.password },
      { withCredentials: true }
    );
    console.log(response);
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
}

export default LoginPanel;
