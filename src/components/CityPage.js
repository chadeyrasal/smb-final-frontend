import React from 'react';
import {Redirect} from 'react-router-dom';
import NeighbourhoodsContainer from '../containers/NeighbourhoodsContainer';

const CityPage = (props) => {
  let city = props.cities.filter(city => city.id == props.match.params.id)[0]

  return (
    <div>
      <h2>{city ? city.name : null}</h2>
      <h3>{city ? city.country.name : null}</h3>
      <NeighbourhoodsContainer city={city}/>
    </div>
  )
}

export default CityPage;
