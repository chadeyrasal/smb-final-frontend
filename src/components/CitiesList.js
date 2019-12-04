import React from 'react';

const CitiesList = (props) => {
  return (
    <div>
      {props.cities.map(city => <li key={city.id}>{city.name} - {city.country.name}</li>)}
    </div>
  )
}

export default CitiesList;
