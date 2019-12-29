import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';

const FooterLoggedIn = ({currentUser}) => {
  return (
    <div>
      <Segment attached='bottom' secondary>
        <h5>You are logged in as {currentUser.fullname}</h5>
      </Segment>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(FooterLoggedIn);
