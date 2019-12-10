import React from 'react';

const CityPage = (props) => {
  return (
    <li>
      {props.city.name} - {props.city.country.name}
    </li>
  )
}

export default CityPage;
