import React, { Component } from "react";
import LoginPanel from "./LoginPanel";
import SecretPage from "./SecretPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <LoginPanel />
        <SecretPage />
      </div>
    );
  }
}

export default App;
