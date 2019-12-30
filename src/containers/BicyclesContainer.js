import React from 'react';
import { connect } from 'react-redux';
import { fetchBicycles } from '../actions/fetchBicycles';

class BicyclesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBicycles()
  }

  render() {
    return (
      <div>
        BicyclesContainer
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bicycles: state.bicycles
  }
}

export default connect(mapStateToProps, {fetchBicycles})(BicyclesContainer);
