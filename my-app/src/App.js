import React, { Component } from 'react';
import './App.css';

import Name from './components/Names';
import Data from './data/names.json';


import axios from "axios";

class App extends Component {

  state = {
    namesData: Data,
    name: 'pravien',
    intervalIsSet: false,
    data: []
  }

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever 
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  render() {
    const {data} = this.state;
    return (
      <div className="App">
      <div className="nameList">
        <header className="App-header">
          <h1>Fetch Name Details</h1>
          <ul>
            {data.map((names, index) => {
              return <Name 
               uName={names.firstname}
               lName={names.lastname}
               key={index}/>
            })}
          </ul>
        </header>
        </div>
      </div>
    );
  }
}

export default App;
