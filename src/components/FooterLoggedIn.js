import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

const FooterLoggedIn = ({currentUser}) => {
  return (
    <div>
      <Segment attached='bottom' secondary>
        <h5>You are logged in as <Link to={`/users/${currentUser.id}`}>{currentUser.fullname}</Link></h5>
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
