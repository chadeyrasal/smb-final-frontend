import React from 'react';
import {connect} from 'react-redux';
import {getCurrentUser} from './actions/auth';
import NavBarLoggedIn from './components/NavBarLoggedIn';
import NavBarLoggedOut from './components/NavBarLoggedOut';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CitiesContainer from './containers/CitiesContainer';
import BicyclesContainer from './containers/BicyclesContainer';
import NeighbourhoodsContainer from './containers/NeighbourhoodsContainer';
import UsersContainer from './containers/UsersContainer';
import { Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        {this.props.currentUser ? <NavBarLoggedIn /> : <NavBarLoggedOut />}

        <Route path='/login' component={LoginForm} />
        <Route path='/signup' component={SignUpForm} />
        <Route exact path='/' component={HomePage} />
        <Route path='/cities' component={CitiesContainer} />
        <Route path='/bicycles' component={BicyclesContainer} />
        <Route path='/neighbourhoods/:id' component={NeighbourhoodsContainer} />
        <Route path='/users' component={UsersContainer} />

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
