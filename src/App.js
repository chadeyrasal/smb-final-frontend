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
import Logout from './components/Logout';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        {this.props.currentUser ? <Logout /> : <LoginForm />}
        <CitiesContainer />
        <BicyclesContainer />
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
