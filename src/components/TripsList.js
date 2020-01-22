import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Segment } from 'semantic-ui-react';

const TripsList = ({ currentUser }) => {
  if (currentUser) {
    return (
      <Container>
        <Segment basic textAlign={'center'}>
          <Header>Your Trips</Header>
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
