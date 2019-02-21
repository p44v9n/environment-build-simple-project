import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';

import Name from './components/Names';
import NamesInfo from './components/NamesInfo';
import DefaultContent from './components/DefaultContent'

class App extends Component {

  state = {
    intervalIsSet: false,
    data: [],
    personClicked: false,
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

  clickHandler = (names) => {
    this.setState({
      personClicked: true,
      firstName: names.firstname,
      lastName: names.lastname,
      age: names.age,
      nationality: names.nationality
    });
  }

  render() {
    const {data} = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <div className="nameList">
            <header className="header">
              <div className="header-content">
                <h1>Team Tent</h1>
                <ul>
                  {data.map((names, index) => {
                    return <Name 
                    uName={names.firstname}
                    lName={names.lastname}
                    clicked={this.clickHandler.bind(this, names)}
                    key={index}/>
                  })}
                </ul>
              </div>
            </header>
            {!this.state.personClicked ? 
              <DefaultContent /> :
              <NamesInfo 
              fNmameInfo={this.state.firstName}
              lNameInfo={this.state.lastName}
              ageInfo={this.state.age}
                nationalityInfo={this.state.nationality}/>
            }
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
