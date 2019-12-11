import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
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
        <Switch> {/* Switch chooses the first route that matches the path, so routes order matters */}
          <Route path='/bicycles/new' component={CreateBicycleForm}></Route>
        </Switch>
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
