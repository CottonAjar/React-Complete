import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
  state = {
    length: 0,
    word: null,
    ar: []
  };

  changeHandler = event => {
    var length = event.target.value.length;
    var word = event.target.value;
    //console.log(length);
    var ar = []
    for (var i = 0; i < length; i++) {
      ar = [...ar, word.charAt(i)];
    }
    
    this.setState({length: length, word: word, ar: ar});
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.changeHandler(event)} />
        <p>{this.state.length}</p>
        <ValidationComponent length={this.state.length} />
        {this.state.ar.map((ch) => {
          return <CharComponent text={ch} />
        })}
      </div>
    );
  }
}

export default App;
