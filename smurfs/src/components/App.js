import React, { Component } from "react";
import "./App.scss";
import SmurfList from "./SmurfList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurfs Resort</h1>
        <h3>Check List:</h3>
        <SmurfList/>
      </div>
    );
  }
}

export default App;
