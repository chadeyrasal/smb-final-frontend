import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Segment, Button } from 'semantic-ui-react';

const FooterLoggedIn = ({currentUser}) => {
  return (
    <div>
      <Segment attached='bottom' textAlign={'center'} secondary>
        <h5>You are logged in as <Link to={`/users/${currentUser.id}`}>{currentUser.fullname}</Link></h5>
        <Button size='mini' basic color='black' style={{textAlign: 'center'}}>Log Out</Button>
        
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
