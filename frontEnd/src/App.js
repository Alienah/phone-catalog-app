import React, { Component } from 'react';
import './App.css';
import  PhoneListContainer  from "./containers/PhoneListContainer";
import PhoneDetailComponent from "../components/PhoneDetailComponent";

class App extends Component {
  render() {
    console.log(this)
    return (
      <div className="App">
        <PhoneListContainer />
      </div>
    );
  }
}

export default App;
