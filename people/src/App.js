import React, { Component } from 'react';
import './App.css';
import  Person  from './Person/Person';
import GridLayout from "clarity-react-responsive-grid-layout";

class App extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        fetch('/people', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })
        .then(res => res.json())
        .then(people => {
            this.setState({
                people: people.map(person =>
                    <Person key={person.id}
                            name={person.name}
                            height={Number(person.height)}
                            haircolor={person.hair_color}
                            eyecolor={person.eye_color}
                            skincolor={person.skin_color}
                            birthyear={person.birth_year}
                            gender={person.gender}
                    />
                  )
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Star Wars People</h1>
                <GridLayout cardWidth={400} padding={24} cards={this.state.people} />
            </div>
        );
    }
}

export default App;
