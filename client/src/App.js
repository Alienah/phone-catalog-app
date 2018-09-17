import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { getPhones } from "./store/clientFetchReducer";

class App extends Component {

  componentDidMount() {
    this.props.getPhones()
  }

  render() {
    console.log(this)
    return (
      <div className="App">

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

const connection = connect(mapStateToProps, mapDispatchToProps);
const AppConnected = connection(App)

export default AppConnected;
