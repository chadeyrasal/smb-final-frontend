import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BicyclesCard from './BicyclesCard';
import AnneLaure from '../images/AnneLaure.png';
import { Container, Card, Grid, Segment, Image, Divider, Button, Header, List } from 'semantic-ui-react';

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
              <Segment basic textAlign={'center'}>
                <Segment basic>
                  <Header>Your Trips</Header>
                  {user.reservations.length !== 0 ? null : <Segment basic>You haven't booked any trip yet</Segment>}
                  {user.reservations.length !== 0 ? null : <Button as={Link} to='/cities' fluid>Browse Cities</Button>}
                </Segment>
                <Card>
                  <Card.Content>
                    <List divided relaxed>
                      {user.reservations.map(resa =>
                        <List.Item key={resa.id}>
                          <List.Content>
                            {console.log(resa)}
                            <Card.Description>{resa.bicycle.title}</Card.Description>
                            <Card.Meta>{new Intl.DateTimeFormat('en-GB', {month: 'short', day: 'numeric'}).format(new Date(Date.parse(resa.start_date)))} to {new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'short', day: 'numeric'}).format(new Date(Date.parse(resa.end_date)))}</Card.Meta>
                            <Divider />
                            {resa.review ? <Card.Meta>resa.review</Card.Meta> : <Button as={Link} to={`/trips/${resa.id}/edit`}>Review Your Trip</Button>}
                          </List.Content>
                        </List.Item>
                      )}
                    </List>
                  </Card.Content>
                </Card>

              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic>
                <Segment basic textAlign={'center'}>
                  <Header>Your Bicycles</Header>
                  {user.bicycles.length !== 0 ? <Segment basic><BicyclesCard user={user} /></Segment> : <Segment basic>You haven't listed any bicycle yet</Segment>}
                  <Button as={Link} to='/bicycles/new' fluid>List your Bicycle</Button>
                </Segment>
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
