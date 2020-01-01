import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Label, Icon, Image, Button, Segment } from 'semantic-ui-react';

const BicyclesListNeigh = (props) => {
  let neighbourhood = props.neighbourhoods.filter(neighbourhood => neighbourhood.id === parseInt(props.match.params.id))[0]

  if (neighbourhood) {
    return (
      <div>
        <Container>
          <Card.Group>
            {neighbourhood.bicycles.map(bicycle =>
              <Card key={bicycle.id}>
                <Card.Content>
                  <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png'/>
                  <Card.Header>{bicycle.bicycle_type} <Label><Icon name='tag' /> £{bicycle.price}</Label></Card.Header>
                  <Card.Meta><Link to={`/neighbbourhoods/${neighbourhood.id}`}>{neighbourhood.name}</Link>- <Link to={`/cities/${neighbourhood.city.id}`}>{neighbourhood.city.name}</Link></Card.Meta>
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

export default BicyclesListNeigh;
