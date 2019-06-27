import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'supermax'
  }

  inputChangedHandler = event => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="app">
        <UserInput changed={this.inputChangedHandler} name={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
      </div>
    );
  }
  
}

export default App;
