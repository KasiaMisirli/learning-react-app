import React, { Component } from "react";

export default class Comp_one extends Component {
  state = {
    nr1: 0,
    nr2: 0
  };

  how_many = (nr1, nr2) => {
    return nr1 + nr2;
  };

  changeStateNr1 = event => {
    this.setState({ nr1: event.target.value });
  };
  changeStateNr2 = event => {
    this.setState({ nr2: event.target.value });
  };
  addTwoNumbers = e => {
    e.prevent.default();
    return this.state.n1 + this.state.n2;
  };

  render() {
    return (
      <div>
        <h2>This is the child of App: Comp_one</h2>
        <form onSubmit={this.addTwoNumbers}>
          <input onChange={this.changeStateNr1} />
          <input onChange={this.changeStateNr2} />
          <button submit="submit">Add</button>
          <h1>1: {this.state.nr1}</h1>
          <h1>2: {this.state.nr2}</h1>
          {this.addTwoNumbers()}
        </form>
      </div>
    );
  }
}
