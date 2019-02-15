import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      { name: "Max", age: 28},
      { name: "Manu", age: 29},
      { name: "Stepahnie", age: 26}
    ],
    otherStates: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) =>
  {
    //console.log("Was clicked !")
    this.setState( {
      persons: [
        { name: newName, age: 28},
        { name: "Manu", age: 29},
        { name: "Stepahnie", age: 27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: "Max", age: 28},
        { name: event.target.value, age: 29},
        { name: "Stepahnie", age: 27}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    return (
      <div className="App">
       <h1>Hi, i'm a React App</h1>
       <p>This is realy working</p>
       <button 
        style={style}
        onClick={this.togglePersonsHandler} >Switch Name</button>    
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Max!")}
              changed={this.nameChangedHandler}>My hobbies: Racing</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} />          
          </div>
      </div>
    );
    //return React.createElement('div', {classeName: 'App'}, React.createElement('h1', null, 'Does this work ?'))
  }
}

export default App;
