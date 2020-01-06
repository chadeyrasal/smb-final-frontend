import React from 'react';
import { Link } from 'react-router-dom';
import GreenBicycle from '../images/green-bike-by-water.jpg';
import { Container, Card, Label, Icon, Image, Button, Segment, Header } from 'semantic-ui-react';

const BicyclesList = (props) => {
  let city = props.cities.filter(city => city.id === parseInt(props.match.params.id))[0]

  if (city) {
    return (
      <div>
        <Container>
          <Segment basic textAlign={'center'}>
            <Header>Bicycles in {city.name}</Header>
            <Link to={`/cities/${city.id}`}>Back to {city.name}</Link>
          </Segment>
          <Card.Group>
            {city.bicycles.map(bicycle =>
              <Card key={bicycle.id}>
                <Image src={GreenBicycle}/>
                <Card.Content>
                  <Card.Header>{bicycle.bicycle_type} <Label><Icon name='tag' /> £{bicycle.price}</Label></Card.Header>
                  <Card.Meta><Link to={`/neighbbourhoods/${bicycle.neighbourhood.id}`}>{bicycle.neighbourhood.name}</Link>- <Link to={`/cities/${city.id}`}>{city.name}</Link></Card.Meta>
                  <Card.Description>{bicycle.title}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Segment basic textAlign={'center'}>
                    <Button.Group vertical labeled icon basic>
                      <Button as={Link} to={`/bicycles/${bicycle.id}`} icon='bicycle' content='See this bicycle' />
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
}

export default BicyclesList;
