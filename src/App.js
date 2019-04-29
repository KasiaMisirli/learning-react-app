import React, { Component } from "react";
import "./App.css";
import CompOne from "./CompOne";
import CompTwo from "./CompTwo";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>This is the App</h1>
        <CompOne />
        <CompTwo />
      </div>
    );
  }
}

export default App;
