import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter, Link } from 'react-router-dom';

import Name from './components/Names';
import NamesInfo from './components/NamesInfo';
import DefaultContent from './components/DefaultContent'
import axios from 'axios';

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

    axios.get('http://localhost:3001/api/getData')
      .then(res => this.setState({data: res.data.data}))
  }

  profileClickHandler = (names) => {
    this.setState({
      personClicked: true,
      firstName: names.firstname,
      lastName: names.lastname,
      age: names.age,
      nationality: names.nationality
    });
  }

  headerClickHandler = () => {
    this.setState({
      personClicked: false
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
                <h1
                  onClick={this.headerClickHandler}
                >
                  <Link to="/">Team Tent</Link>
                </h1>
                <ul>
                  {data.map((names, index) => {
                    return <Name 
                    uName={names.firstname}
                    lName={names.lastname}
                    clicked={this.profileClickHandler.bind(this, names)}
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
