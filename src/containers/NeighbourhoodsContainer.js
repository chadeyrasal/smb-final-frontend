import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchNeighbourhoods } from '../actions/neighbourhoods';
import BicyclesListNeigh from '../components/BicyclesListNeigh';

class NeighbourhoodsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchNeighbourhoods()
  }

  render() {
    return (
      <div>
        <Route path='/neighbourhoods/:id' render={(routerProps) => <BicyclesListNeigh {...routerProps} neighbourhoods={this.props.neighbourhoods} />} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    neighbourhoods: state.neighbourhoods
  }
}

export default connect(mapStateToProps, { fetchNeighbourhoods })(NeighbourhoodsContainer);
