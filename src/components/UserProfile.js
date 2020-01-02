import React from 'react';
import { Container, Grid, Segment, Card } from 'semantic-ui-react';

const UserProfile = (props) => {
  let user = props.users.filter(user => user.id === parseInt(props.match.params.id))[0]

  if (user) {
    return (
      <Container>
        <Grid columns={3} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment basic>
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
