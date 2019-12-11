import React from 'react';
import {Link} from 'react-router-dom';

const CitiesList = (props) => {
  return (
    <div>
      {props.cities.map(city => <li key={city.id}><Link to={`/cities/${city.id}`}>{city.name}</Link></li>)}
    </div>
  )
}

export default CitiesList;
