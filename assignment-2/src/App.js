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

  deleteChangeHandler = index => {
    var word = {...this.state.word};
    //console.log(word[index]);
    word[index] = null;
    console.log(word);
    //this.setState({word: word});
  }

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.word} onChange={(event) => this.changeHandler(event)} />
        <p>{this.state.length}</p>
        <ValidationComponent length={this.state.length} />
        {this.state.ar.map((ch, index) => {
          return <CharComponent text={ch} click={this.deleteChangeHandler.bind(this, index)} />
        })}
      </div>
    );
  }
}

export default App;
