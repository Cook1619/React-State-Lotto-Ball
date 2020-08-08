import React, { Component } from "react";
import Lottery from "./Lottery";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Lottery />
        <Lottery title="Mini Daily" maxNum={15} numBalls={15} />
      </div>
    );
  }
}
