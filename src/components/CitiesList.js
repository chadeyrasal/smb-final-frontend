import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Image, Segment, Container } from 'semantic-ui-react';

const CitiesList = (props) => {
  return (
    <Container className='cards-wrapper'>
      <Card.Group>
        {props.cities.map(city =>
          <Card key={city.id}>
            <Card.Content>
              <Image floated='right' size='tiny' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
              <Card.Header><Link className='bold-link' to={`/cities/${city.id}`}>{city.name}</Link></Card.Header>
              <Card.Meta>{city.country.name}</Card.Meta>
              <Card.Description>
                See details on <Link className='bold-link' to={`/cities/${city.id}`}>{city.name}</Link> neighbourhoods and bicycles by clicking the buttons below
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Segment basic textAlign={'center'}>
                <Button.Group vertical labeled icon basic>
                  <Button as={Link} to={`/cities/${city.id}/bicycles`} icon='bicycle' content='See Bicycles' />
                  <Button as={Link} to={`/cities/${city.id}/neighbourhoods`} icon='location arrow' content='See Neighbourhoods' />
                </Button.Group>
              </Segment>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
    </Container>
  )
}

export default CitiesList;
