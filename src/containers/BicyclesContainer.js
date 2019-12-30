import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchBicycles } from '../actions/fetchBicycles';
import BicyclePage from '../components/BicyclePage';

class BicyclesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBicycles()
  }

  render() {
    return (
      <div>
        <Route path='/bicycles/:id' render={(routerProps) => <BicyclePage {...routerProps} bicycles={this.props.bicycles} />} />
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
