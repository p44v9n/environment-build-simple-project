import React, { Component } from 'react';
import './App.css';

import Name from './components/Names';
import Data from './data/names.json';


//import axios from "axios";

class App extends Component {

  state = {
    namesData: Data,
    intervalIsSet: false,
    data: [],
    firstName: null,
    lastName: null,
    age: null,
    nationality: null
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

  clcikHandler = (names) => {
    this.setState({
      firstName: names.firstname,
      lastName: names.lastname,
      age: names.age,
      nationality: names.nationality
    });
  }

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
               clicked={this.clcikHandler.bind(this, names)}
               key={index}/>
            })}
          </ul>
        </header>
        <p>First Name: {this.state.firstName}</p>
        <p>Last Name: {this.state.lastName}</p>
        <p>Age: {this.state.age}</p>
        <p>Nationality: {this.state.nationality}</p>
        </div>
      </div>
    );
  }
}

export default App;
