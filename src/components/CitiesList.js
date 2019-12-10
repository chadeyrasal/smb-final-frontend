import React from 'react';
import CityPage from './CityPage';

const CitiesList = (props) => {
  return (
    <div>
      {props.cities.map(city => <div key={city.id}><CityPage city={city}/></div>)}
    </div>
  )
}

export default CitiesList;
