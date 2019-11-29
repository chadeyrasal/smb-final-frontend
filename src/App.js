import React from 'react';
import {connect} from 'react-redux';
import {fetchCities} from './actions/fetchCities';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCities({type: 'FETCH_CITIES', payload: {name: "Paris"}})
  }

  render() {
    return (
      <div className="App">
        App
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
export default connect(null, {fetchCities})(App);
