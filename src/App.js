import React from 'react';
import {connect} from 'react-redux';
import {getCurrentUser} from './actions/auth';
import NavBarLoggedIn from './components/NavBarLoggedIn';
import NavBarLoggedOut from './components/NavBarLoggedOut';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import FooterLoggedIn from './components/FooterLoggedIn';
import FooterLoggedOut from './components/FooterLoggedOut';
import HomeContainer from './containers/HomeContainer';
import CitiesContainer from './containers/CitiesContainer';
import BicyclesContainer from './containers/BicyclesContainer';
import { Route } from 'react-router-dom';
import 'react-dates/initialize';

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
        <Route exact path='/' component={HomeContainer} />
        <Route path='/cities' component={CitiesContainer} />
        <Route path='/bicycles' component={BicyclesContainer} />

        {this.props.currentUser ? <FooterLoggedIn /> : <FooterLoggedOut />}
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
