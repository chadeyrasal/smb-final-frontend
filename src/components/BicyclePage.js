import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Grid, Segment, Button, Image, Divider } from 'semantic-ui-react';

const BicyclePage = (props) => {
  let bicycle = props.bicycles.filter(bicycle => bicycle.id === parseInt(props.match.params.id))[0]

  if (bicycle) {
    return (
      <div>
        <Container>
          <Grid columns={3} divided>
            <Grid.Row stretched>
              <Grid.Column>
                <Segment basic textAlign={'center'}>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                  <Divider />
                  <Button color='olive'>Book this bicycle</Button>
                </Segment>
              </Grid.Column>

              <Grid.Column>
                <Segment basic>
                  <Card>
                    <Card.Content>
                      <Card.Header>{bicycle.title}</Card.Header>
                      <Card.Meta><Link to={`/neighbourhoods/${bicycle.neighbourhood.id}`}>{bicycle.neighbourhood.name}</Link>- <Link to={`/cities/${bicycle.neighbourhood.city.id}`}>{bicycle.neighbourhood.city.name}</Link></Card.Meta>
                      <Card.Description>{bicycle.description}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Segment basic textAlign={'center'}>
                      <Button.Group basic vertical>
                        <Button circular icon='setting'/>
                        <Button circular icon='resize vertical'/>
                        <Button circular icon='circle outline'/>
                        <Button circular icon='tag'/>
                      </Button.Group>
                      <Button.Group basic vertical>
                        <Button>{bicycle.bicycle_type}</Button>
                        <Button>{bicycle.size}</Button>
                        <Button>{bicycle.colour}</Button>
                        <Button>£{bicycle.price}</Button>
                      </Button.Group>
                      </Segment>
                    </Card.Content>
                    <Card.Content extra>
                      <Segment basic textAlign={'center'}>
                        Owner: <Link to={`/users/${bicycle.owner.id}/profile`}>{bicycle.owner.fullname}</Link>
                      </Segment>
                    </Card.Content>
                  </Card>
                </Segment>
              </Grid.Column>

              <Grid.Column>
                <Segment basic>

                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  } else {
    return null
  }
}

export default BicyclePage;
