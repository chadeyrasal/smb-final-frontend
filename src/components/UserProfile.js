import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Segment, Image, Card, Header, List, Label, Icon } from 'semantic-ui-react';

const UserProfile = (props) => {
  let user = props.users.filter(user => user.id === parseInt(props.match.params.id))[0]

  console.log(user)

  if (user) {
    return (
      <Container>
        <Grid columns={3} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment basic>
                <Card>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                  <Card.Content>
                    <Card.Header>{user.fullname}</Card.Header>
                    <Card.Meta>Member since: {user.created_at}</Card.Meta>
                  </Card.Content>
                </Card>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic textAlign={'center'}>
                <Header>About {user.fullname}</Header>
                {user.description ? <Segment basic>{user.description}</Segment> : <Segment basic>There is no about me for {user.fullname} yet</Segment>}
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic textAlign={'center'}>
                <Header>Bicycles </Header>
                <Card>
                  <Card.Content>
                    <List divided relaxed>
                      {user.bicycles.map(bicycle =>
                        <List.Item key={bicycle.id}>
                          <List.Content>
                            <Card.Description>{bicycle.title}</Card.Description>
                            <List bulleted horizontal link>
                              <List.Item><Label><Icon name='tag' /> £{bicycle.price}</Label></List.Item>
                              <List.Item as={Link} to={`/bicycles/${bicycle.id}`}>See details</List.Item>
                            </List>
                          </List.Content>
                        </List.Item>
                      )}
                    </List>
                  </Card.Content>
                </Card>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  } else {
    return null
  }
}

export default UserProfile;
