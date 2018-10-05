import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import members from'./members'

class App extends Component {
constructor () {
  super();
  this.state = {
    members: members
  };
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Avengers:  By Savannah
          </p>
          
        </header>

        <div>
          {this.state.members.map (a => (
            <div key = {a.realName}>
            <p>
              Name: {a.name}  ,    
              Real Name: {a.realName}
            </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
