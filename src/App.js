import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <h1>Hello World!</h1>
      </React.Fragment>
    );
  }
}

export default App;
