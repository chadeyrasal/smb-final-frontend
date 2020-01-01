import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Image, Segment, Button } from 'semantic-ui-react';

const NeighbourhoodsList = (props) => {
  let city = props.cities.filter(city => city.id === parseInt(props.match.params.id))[0]

  if (city) {
    return (
      <div>
        <Container>
          <Card.Group>
            {city.neighbourhoods.map(neighbourhood =>
              <Card key={neighbourhood.id}>
                <Card.Content>
                  <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png'/>
                  <Card.Header>{neighbourhood.name}</Card.Header>
                  <Card.Meta><Link to={`/cities/${city.id}`}>{city.name}</Link></Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Segment basic textAlign={'center'}>
                    <Button.Group vertical labeled icon basic>
                      <Button as={Link} to={`/neighbourhoods/${neighbourhood.id}/bicycles`} icon='bicycle' content='Sees all Bicycles' />
                    </Button.Group>
                  </Segment>
                </Card.Content>
              </Card>
            )}
          </Card.Group>
        </Container>
      </div>
    )
  } else {
    return null
  }
};

export default NeighbourhoodsList;
