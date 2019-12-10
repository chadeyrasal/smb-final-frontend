import React from 'react';
import {connect} from 'react-redux';
import CitiesContainer from './containers/CitiesContainer';
import BicyclesContainer from './containers/BicyclesContainer';
import CountriesContainer from './containers/CountriesContainer';
import NeighbourhoodsContainer from './containers/NeighbourhoodsContainer';
import TripsContainer from './containers/TripsContainer';
import UsersContainer from './containers/UsersContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CitiesContainer />
        <BicyclesContainer />
      </div>
    );
  }
}

export default App;
