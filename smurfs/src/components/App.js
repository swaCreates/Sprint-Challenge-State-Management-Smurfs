import React, { Component } from "react";
import "./App.scss";

import SmurfList from "./SmurfList";
import SmurfForm from './SmurfForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurfs Resort</h1>
        <h3>Check List:</h3>
        <SmurfForm/>
        <SmurfList/>
      </div>
    );
  }
}

export default App;
