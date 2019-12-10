import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import CreateBicycleForm from '../components/CreateBicycleForm';
import BicyclesList from '../components/BicyclesList';
import {fetchCityBicycles} from '../actions/fetchCityBicycles';

class BicyclesContainer extends React.Component {
  componentDidMount() {
    //this.props.fetchCityBicycles()
  }

  render() {
    return (
      <div>
        BicyclesContainer
        <Route path='/bicycles/new' component={CreateBicycleForm}></Route>
        <BicyclesList/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bicycles: state.bicycles
  }
}

export default connect(mapStateToProps, {fetchCityBicycles})(BicyclesContainer);
