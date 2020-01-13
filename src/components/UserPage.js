import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AnneLaure from '../images/AnneLaure.png';
import { Container, Card, Grid, Segment, Image, Divider, Button, Header } from 'semantic-ui-react';

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
                    <Card.Meta>You joined in {new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'long'}).format(new Date(Date.parse(user.created_at)))}</Card.Meta>
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
                <Segment basic textAlign={'center'}><Header>Your Trips</Header></Segment>
                <ul>
                  {user.reservations.map(resa =>
                    <li key={resa.id}>
                      {new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'short', day: 'numeric'}).format(new Date(Date.parse(resa.start_date)))} to {new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'short', day: 'numeric'}).format(new Date(Date.parse(resa.end_date)))}
                    </li>
                  )}
                </ul>
                <Segment basic>Upcoming trips: </Segment>
                <Segment basic>Past trips: </Segment>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic>
                <Segment basic textAlign={'center'}><Header>Your Bicycles</Header></Segment>
                {user.bicycles.map(bicycle =>
                  bicycle.title
                )}
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
