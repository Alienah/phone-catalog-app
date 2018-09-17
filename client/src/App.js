import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { getPhones } from "./store/clientFetchReducer";
import  PhoneListContainer  from "./components/PhoneListContainer";

class App extends Component {

  componentDidMount() {
    this.props.getPhones()
  }

  render() {
    console.log(this)
    return (
      <div className="App">
        <PhoneListContainer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isloading: state.clientFetch.loading,
    phones: state.clientFetch.phones
  }
}
const mapDispatchToProps = {
  getPhones
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
