import React, { useState, Component } from 'react'; 
import styles from './App.css'; 
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{id: 'eaklc', name: 'Max', age: 28},
			{id: 'lojac', name: 'Manu', age: 29},
			{id: 'qockl', name: 'Stephanie', age: 26}
		],
		showPersons: false
	}
	
	 nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});
		
		const person = {
			...this.state.persons[personIndex]
		}
		
		person.name = event.target.value;
		
		const persons = [...this.state.persons];
		persons[personIndex] = person;
    

		this.setState({
			persons: persons
		});
	}
	
	
	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow
		});
	}
	
	deletePersonHandler = index => {
		const persons = [...this.state.persons];
		
		persons.splice(index, 1);
		this.setState({
			persons: persons
		});
	}
	
	
	  
	render() {
	const classes = []; // "red bold"
	  if (this.state.persons.length <= 2) {
		classes.push(styles.red);
	  }
	  if (this.state.persons.length <= 1) {
		classes.push(styles.bold);
    }

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} age ={person.age} changed={event => this.nameChangedHandler(event, person.id)} click={this.deletePersonHandler.bind(this, index)}
            key={person.id}/>
          })}
        </div>
      );

      btnClass = styles.Red
    }


    return (
        <div className={styles.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button className={btnClass} 
          onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
        </div> 
    );
  }
	
}

export default App;