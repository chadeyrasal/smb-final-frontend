import React from 'react';
import { connect } from 'react-redux';

class BicyclesContainer extends React.Component {
  componentDidMount() {
    //this.props.fetchBicycles()
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

export default connect(mapStateToProps)(BicyclesContainer);
