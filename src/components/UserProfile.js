import React from 'react';
import { Container, Grid, Segment, Image, Card, Header } from 'semantic-ui-react';

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
                {user.description ? <Segment basic>{user.description}</Segment> : `There is no about me for ${user.fullname} yet`}

              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic textAlign={'center'}>
                <Header>{user.fullname}'s bicycles </Header>
                {user.fullname}
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
