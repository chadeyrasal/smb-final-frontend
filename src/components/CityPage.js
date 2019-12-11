import React from 'react';
import {Redirect} from 'react-router-dom';
import NeighbourhoodsContainer from '../containers/NeighbourhoodsContainer';

const CityPage = (props) => {
  let city = props.cities[props.match.params.id - 1]
  // Won't work if some entries have been deleted in the backend, because then id - 1 won't match array index

  return (
    <div>
      <h2>{city ? city.name : null}</h2>
      <h3>{city ? city.country.name : null}</h3>
      <NeighbourhoodsContainer />
    </div>
  )
}

export default CityPage;
