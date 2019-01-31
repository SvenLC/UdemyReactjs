import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, i'm a React App</h1>
       <p>This is realy working</p>
      </div>
    );
    //return React.createElement('div', {classeName: 'App'}, React.createElement('h1', null, 'Does this work ?'))
  }
}

export default App;
