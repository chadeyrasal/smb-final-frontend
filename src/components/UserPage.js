import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AnneLaure from '../images/AnneLaure.png';
import { Container, Card, Grid, Segment, Image, Divider, Button } from 'semantic-ui-react';

const UserPage = (props) => {
  let user = props.currentUser

  if (user) {
    return (
      <Container>
        <Grid columns={3} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment basic>
                <Card>
                  <Image src={AnneLaure} />
                  <Card.Content>
                    <Card.Header>{user.fullname}</Card.Header>
                    <Divider />
                    Email address:
                    <Card.Meta>{user.email}</Card.Meta>
                    <Divider />
                    About you:
                    <Card.Meta>{user.description ? user.description : 'Feel free to write a few words about yourself by editing your personal info'}</Card.Meta>
                    <Divider />
                    <Button fluid as={Link} to={`/users/${user.id}/edit`}>Edit Your Account</Button>
                  </Card.Content>
                </Card>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic>
                Hello there
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic>
                Hi there
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

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(UserPage);
