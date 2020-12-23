import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import PeopleForm from "./components/peopleform";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <h1>Chance of a COVID case in a room</h1>
        <PeopleForm />
      </React.Fragment>
    );
  }
}

export default App;
