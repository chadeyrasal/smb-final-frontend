import React from 'react';
import BicyclesCard from './BicyclesCard';
import { Container, Grid, Segment, Image, Card, Header } from 'semantic-ui-react';

const UserProfile = (props) => {
  let user = props.users.filter(user => user.id === parseInt(props.match.params.id))[0]

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
                    <Card.Meta>Member since {new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'long'}).format(new Date(Date.parse(user.created_at)))}</Card.Meta>
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
                {user.bicycles.length !== 0 ? <Segment basic><BicyclesCard user={user} /></Segment> : <Segment basic>There are no bicycles listed by {user.fullname} yet</Segment>}
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
