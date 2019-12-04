import React from 'react';
import {connect} from 'react-redux';
import CitiesContainer from './containers/CitiesContainer';
import BicyclesContainer from './containers/BicyclesContainer';
import CountriesContainer from './containers/CountriesContainer';
import NeighbourhoodsContainer from './containers/NeighbourhoodsContainer';
import TripsContainer from './containers/TripsContainer';
import UsersContainer from './containers/UsersContainer';

class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <CitiesContainer />
        <BicyclesContainer />
      </div>
    );
  }
}

// allows access to current store values as props
// const mapStateToProps => (state) {
//   return {
//     cities: state.cities
//   }
// }

// 1 - by setting a second argument to connect, we can then dispatch new actions to the store from this component
// 2 - if we just need to dispatch actions to the store - not getting current store values - we just need to pass
// null as first argument
export default App;
