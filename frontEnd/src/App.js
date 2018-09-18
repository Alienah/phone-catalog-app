import React, { Component } from 'react';
import './App.css';
import Logo from './images/mm-logo-main.png';
import { Route, Switch, Link } from 'react-router-dom';
import PhoneListContainer from "./containers/PhoneListContainer";
import PhoneDetailComponent from "./components/PhoneDetailComponent";
import { connect } from "react-redux";
import { getPhones } from "./store/clientFetchReducer";

class App extends Component {
  componentDidMount() {
    this.props.getPhones()
  }

  render() {
    console.log(this)
    return (
      <div className="app">
        <header className="app__header">
          <img className="logo" src={Logo} alt="logo" />
          <Link className="header__item-link" to='/'>Inicio</Link>
        </header>
        <main className="app__main">
          <Switch>
            <Route exact path='/' render={() =>
              <PhoneListContainer />
            } />
            <Route path='/details/:id' render={(props) =>
              <PhoneDetailComponent
                phone={this.props.phones.filter(phone => phone.id == props.match.params.id)}
              />
            } />
          </Switch>
        </main>
        <footer className="app__footer">
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    phones: state.clientFetch.phones
  }
}
const mapDispatchToProps = {
  getPhones
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

