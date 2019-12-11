import React from 'react';
import NeighbourhoodsList from '../components/NeighbourhoodsList'

class NeighbourhoodsContainer extends React.Component {
  render() {
    return (
      <div>
        <NeighbourhoodsList neighbourhoods={this.props.city && this.props.city.neighbourhoods}/>
      </div>
    )
  }
}

export default NeighbourhoodsContainer;
