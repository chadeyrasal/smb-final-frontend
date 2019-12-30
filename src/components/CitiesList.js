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
              <Card.Header><Link className='footer-para' to={`/cities/${city.id}`}>{city.name}</Link></Card.Header>
              <Card.Meta>{city.country.name}</Card.Meta>
              <Card.Description>
                See details on <Link className='footer-para' to={`/cities/${city.id}`}>{city.name}</Link> neighbourhoods and bicycles by clicking the buttons below
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Segment basic textAlign={'center'}>
                <Button.Group vertical labeled icon basic textAlign={'center'}>
                  <Button icon='bicycle' content='See Bicycles' />
                  <Button icon='location arrow' content='See Neighbourhoods' />
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
