import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Segment, Button, Divider } from 'semantic-ui-react';

const FooterLoggedIn = ({currentUser}) => {
  return (
    <div>
      <Segment attached='bottom' textAlign={'center'} secondary>
        <h5>You are logged in as <Link to={`/users/${currentUser.id}`}>{currentUser.fullname}</Link></h5>
        <Button size='mini' basic color='black' style={{textAlign: 'center'}}>Log Out</Button>
        <Divider />
        <p><Link className='footer-para' to='/about'>About Share My Bike</Link></p>
        <p>{'\u00a9'} Share My Bike 2019. All rights reserved</p>
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
