import React, { useState } from 'react'; 
import './App.css'; 
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
      persons: [
        {id: 'eaklc', name: 'Max', age: 28},
        {id: 'lojac', name: 'Manu', age: 29},
        {id: 'qockl', name: 'Stephanie', age: 26}
      ],
      otherState: 'some other value'
    }
  );

  const [showPersonsState, setShowPersonsState] = useState({
    showPersons: false
  });

  const [otherState, setOtherState] = useState('some other values');

  //console.log(personsState, otherState);

  const switchNameHandler = newName => {
    //console.log('Was clicked');
    //personsState.persons[0].name = 'Maximillion';
    setPersonsState({persons: [
      {name: newName, age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
    ]});
  }

  const nameChangedHandler = (id, event) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    const person =  {
      ...personsState.persons[personIndex]
    };

    //const person = Object.assign({}, personsState.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({persons: persons});
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  const togglePersonsHandler = () => {
    const doesShow = showPersonsState.showPersons;
    setShowPersonsState({
      showPersons: !doesShow
    });
  }

  const deletePersonHandler = index => {
    const persons = [...personsState.persons];
    persons.splice(index, 1);
    setPersonsState({persons});
  }

  let persons = null;
  if (showPersonsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return <Person name={person.name} age ={person.age} changed={nameChangedHandler.bind(this, person.id)} click={deletePersonHandler.bind(this, index)}
          key={person.id}/>
        })}
      </div>
    );
  }
  
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button 
        style={style} onClick={togglePersonsHandler.bind(this)}>Switch Name</button>
      {persons}
    </div> 
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
}

export default app;
