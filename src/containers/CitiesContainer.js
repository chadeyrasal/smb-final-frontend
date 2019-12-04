import React from 'react';
import {connect} from 'react-redux';
import CitiesList from '../components/CitiesList';
import {fetchCities} from '../actions/fetchCities';

class CitiesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCities()
  }

  render() {
    return (
      <div>
        CitiesContainer
        <CitiesList/>
      </div>
    )
  }
}

const mapStateToProps = (state) {
  return{
    cities: state.cities
  }
}

export default connect(mapStateToProps, {fetchCities})(CitiesContainer);
