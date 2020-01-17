import React from 'react';
import CityCard from './CityCard';
import { Card, Container, Segment, Input } from 'semantic-ui-react';

class CitiesList extends React.Component {
  state = {
    searchCrit: ''
  }

  handleChange = (event) => {
    this.setState({searchCrit: event.target.value});
  }

  render() {
    let allCities = this.state.searchCrit !== '' ? this.props.cities.filter(city => city.name.includes(this.state.searchCrit)) : this.props.cities

    return (
      <Container className='cards-wrapper'>
        <Segment textAlign={'center'} basic>
          <Input icon='search' placeholder='Search cities...' onChange={this.handleChange}/><br/><br/>
          <Card.Group>
            {allCities.map(city =>
              <CityCard key={city.id} city={city} />
            )}
          </Card.Group>
        </Segment>
      </Container>
    )
  }
}

export default CitiesList;
