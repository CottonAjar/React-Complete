import React, { useState, Component } from 'react'; 
import styles from './App.css'; 
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

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

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
		console.log("toggled to show");
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
        </div>
      );
    }


    return (
        <div className={styles.App}>
          <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/>
          {persons}
        </div> 
    );
  }
	
}

export default App;