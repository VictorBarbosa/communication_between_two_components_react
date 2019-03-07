import React, { Component } from 'react';
 
import './App.css';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

class App extends Component {
  constructor() {
    super();
    this.state = { amigo: '' };
  }
 
  CallbackFunction(va) {
    this.setState({ amigo: va });
  }

  render() {
    return (
      <div style={{ background: 'yellow' }}>
        <span>Component Main</span>
        <ComponentA ExternalFunction={a => this.CallbackFunction(a)} />
        <br />
        <ComponentB valueFromOut={this.state.amigo} />
      </div>
    );
  }
}

export default App;
