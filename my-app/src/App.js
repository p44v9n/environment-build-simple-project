import React, { Component } from 'react';
import './App.css';

import Name from './components/Names';
import Data from './data/names.json';

class App extends Component {

  state = {
    namesData: Data,
    name: 'pravien'
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Fetch Name Details</h1>
          <ul>
            {this.state.namesData.map((names, index) => {
              return <Name 
               uName={names.firstname}
               lName={names.lastname}
               key={index}/>
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
