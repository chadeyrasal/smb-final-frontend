import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchBicycles } from '../actions/fetchBicycles';
import BicyclePage from '../components/BicyclePage';
import CreateBicycleForm from '../components/CreateBicycleForm';

class BicyclesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBicycles()
  }

  render() {
    return (
      <div>
        <Route path='/bicycles/:id' render={(routerProps) => <BicyclePage {...routerProps} bicycles={this.props.bicycles} />} />
        <Route exact path='/bicycles/new' component={CreateBicycleForm} />
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
