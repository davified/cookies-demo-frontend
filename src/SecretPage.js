import React, { Component } from "react";
import axios from "axios";
import { BACKEND_URL } from "./constants";

class SecretPage extends Component {
  state = {
    responseBody: ""
  };

  render() {
    return (
      <div>
        <h1>Click to get secret from backend</h1>
        <button onClick={this.getSecret}>Click me!</button>
        <p>{this.state.responseBody}</p>
      </div>
    );
  }

  getSecret = async () => {
    const response = await axios.post(
      `${BACKEND_URL}/secret`,
      {},
      {
        withCredentials: true
        // read: https://github.com/axios/axios/issues/191#issuecomment-311069164
      }
    );
    this.setState({
      responseBody: response.data
    });
  };
}

export default SecretPage;
