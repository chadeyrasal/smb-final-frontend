import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CitiesList from '../components/CitiesList';
import { fetchCities } from '../actions/fetchCities';
import CityPage from '../components/CityPage';
import BicyclesList from '../components/BicyclesList';
import NeighbourhoodsList from '../components/NeighbourhoodsList';

class CitiesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCities()
  }

  render() {
    return (
      <div>
        <Route exact path='/cities' render={() => <CitiesList cities={this.props.cities} />} />
        <Route exact path='/cities/:id' render={(routerProps) => <CityPage {...routerProps} cities={this.props.cities} />}/>
        <Route path='/cities/:id/bicycles' render={(routerProps) => <BicyclesList {...routerProps} cities={this.props.cities} />}/>
        <Route path='/cities/:id/neighbourhoods' component={NeighbourhoodsList} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps, {fetchCities})(CitiesContainer);
