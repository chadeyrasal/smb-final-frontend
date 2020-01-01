import React from 'react';
import NewTrip from '../components/NewTrip';
import { Route } from 'react-router-dom';

class TripsContainer extends React.Component {
  render() {
    return (
      <div>
        <Route path='/trips/new' component={NewTrip}/>
      </div>
    )
  }
}

export default TripsContainer;
