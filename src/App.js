import React from 'react';
import {connect} from 'react-redux';
import CitiesContainer from './containers/CitiesContainer';
import BicyclesContainer from './containers/BicyclesContainer';
import CountriesContainer from './containers/CountriesContainer';
import NeighbourhoodsContainer from './containers/NeighbourhoodsContainer';
import TripsContainer from './containers/TripsContainer';
import UsersContainer from './containers/UsersContainer';
import LoginForm from './components/LoginForm';
import {getCurrentUser} from './actions/getCurrentUser';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <LoginForm />
        <CitiesContainer />
        <BicyclesContainer />
      </div>
    );
  }
}

export default connect(null, {getCurrentUser})(App);
