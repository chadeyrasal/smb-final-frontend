import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import CitiesList from '../components/CitiesList';
import {fetchCities} from '../actions/fetchCities';
import CityPage from '../components/CityPage';

class CitiesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCities()
  }

  render() {
    return (
      <div>
        <Route exact path='/cities' render={() => <CitiesList cities={this.props.cities} />} />
        <Route path='/cities/:id' render={(routerProps) => <CityPage {...routerProps} cities={this.props.cities} />}/>
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
