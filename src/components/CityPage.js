import React from 'react';

const CityPage = (props) => {
  let city = props.cities[props.match.params.id - 1]

  return (
    <li>
      {city ? city.name : null} - {city ? city.country.name : null}
    </li>
  )
}

export default CityPage;
