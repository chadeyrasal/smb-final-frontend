import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LogOut from './Logout';
import { Segment, Divider } from 'semantic-ui-react';

const FooterLoggedIn = ({currentUser}) => {
  return (
    <div>
      <Segment attached='bottom' textAlign={'center'} secondary>
        <h5>You are logged in as <Link className='footer-para' to={`/users/${currentUser.id}`}>{currentUser.fullname}</Link> {'\u00b7'} <LogOut /></h5>
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
