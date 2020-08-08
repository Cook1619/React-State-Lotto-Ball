import React, { Component } from "react";
import Ball from "./Ball";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Ball num="7" />
        <Ball num="6" />
        <Ball num="8" />
        <Ball num="10" />
      </div>
    );
  }
}
