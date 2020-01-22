import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Button } from 'semantic-ui-react';

const TripsList = ({ currentUser }) => {
  if (currentUser) {
    return (
      <Container>
        <Segment basic textAlign={'center'}>
          <Header>Your Trips</Header>
          {currentUser.reservations.length === 0 ? <Segment basic>You haven't booked any trip yet</Segment> : null}
          {currentUser.reservations.length === 0 ? <Button as={Link} to='/cities'>Browse Cities</Button> : null}
          <ul>
            {currentUser.reservations.map(resa =>
              <li>{resa.start_date}</li>
            )}
          </ul>
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
