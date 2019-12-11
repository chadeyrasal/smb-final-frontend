import React from 'react';

const NeighbourhoodsList = (props) => {
  return (
    <div>
      {props.neighbourhoods && props.neighbourhoods.map(neighbourhood => <li key={neighbourhood.id}>{neighbourhood.name}</li>)}
    </div>
  )
};

export default NeighbourhoodsList;
