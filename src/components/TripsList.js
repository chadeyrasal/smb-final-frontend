import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Button, Card, Divider, Icon } from 'semantic-ui-react';

const TripsList = ({ currentUser }) => {
  if (currentUser) {
    return (
      <Container>
        <Segment basic textAlign={'center'}>
          <Header>Your Trips</Header>
          {currentUser.reservations.length === 0 ? <Segment basic>You haven't booked any trip yet</Segment> : null}
          {currentUser.reservations.length === 0 ? <Button as={Link} to='/cities'>Browse Cities</Button> : null}
          <Card.Group>
            {currentUser.reservations.map(resa =>
              <Card key={resa.id}>
                <Card.Content>
                  <Card.Header>Your {new Intl.DateTimeFormat('en-GB', {month: 'long'}).format(new Date(Date.parse(resa.start_date)))} trip</Card.Header>
                  <Card.Meta>Your {new Intl.DateTimeFormat('en-GB', {month: 'short', day: 'numeric'}).format(new Date(Date.parse(resa.start_date)))} to {new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'short', day: 'numeric'}).format(new Date(Date.parse(resa.end_date)))} Trip</Card.Meta>
                  <Divider horizontal>
                    <Header as='h4'><Icon name='bicycle' />The Bicycle</Header>
                  </Divider>
                  <Card.Description><Link to={`/bicycles/${resa.bicycle.id}`}>{resa.bicycle.title}</Link></Card.Description>
                  <Divider />
                  <Card.Description><Button as={Link} to={`/users/${currentUser.id}/trips/${resa.id}/edit`} basic>Review your Trip</Button></Card.Description>
                </Card.Content>
              </Card>
            )}
          </Card.Group>
        </Segment>
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

export default connect(mapStateToProps)(TripsList);
