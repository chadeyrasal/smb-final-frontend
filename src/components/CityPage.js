import React from 'react';
import NeighbourhoodsContainer from '../containers/NeighbourhoodsContainer';
import { Link } from 'react-router-dom';
import { Container, Card, Image, Segment, Button } from 'semantic-ui-react';

const CityPage = (props) => {
  let city = props.cities.filter(city => city.id === parseInt(props.match.params.id))[0]

  if (city) {
    return (
      <Container>
        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
          <Card.Content>
            <Card.Header>{city.name}</Card.Header>
            <Card.Meta>{city.country.name}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Segment basic textAlign={'center'}>
              <Button.Group vertical labeled icon basic>
                <Button as={Link} to={`/cities/${city.id}/bicycles`} icon='bicycle' content={`${city.bicycles.length} bicycle(s) in ${city.name}`}  />
                <Button as={Link} to={`/cities/${city.id}/neighbourhoods`} icon='location arrow' content={`${city.neighbourhoods.length} neighbourhood(s) in ${city.name}`} />
              </Button.Group>
            </Segment>
          </Card.Content>
        </Card>

        <NeighbourhoodsContainer city={city}/>

      </Container>
    )
  } else {
    return null
  }
}

export default CityPage;
