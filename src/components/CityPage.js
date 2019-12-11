import React from 'react';
import {Redirect} from 'react-router-dom';

const CityPage = (props) => {
  let city = props.cities[props.match.params.id - 1]
  // Won't work if some entries have been deleted in the backend, because then id - 1 won't match array index

  return (
    <li>
      {city ? null : <Redirect to='/cities'/>}
      {city ? city.name : null} - {city ? city.country.name : null}
    </li>
  )
}

export default CityPage;
