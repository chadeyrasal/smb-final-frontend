import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LogOut from './Logout';
import { Segment, Divider, Button } from 'semantic-ui-react';

const Footer = ({currentUser}) => {
  return (
    <div>
      <Segment basic></Segment>
      <Segment attached='bottom' textAlign={'center'} secondary>
        {currentUser ? <div><h5>You are logged in as <Link className='footer-para' to={`/users/${currentUser.id}`}>{currentUser.fullname}</Link> {'\u00b7'} <LogOut /></h5><Divider /></div> : null}
        <p><Link className='footer-para' to='/about'>About Share My Bike</Link></p>
        <p><Button circular color='facebook' icon='facebook' />
        <Button circular color='twitter' icon='twitter' />
        <Button circular color='linkedin' icon='linkedin' /></p>
        <p>{'\u00a9'} Share My Bike 2020. All rights reserved</p>
      </Segment>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Footer);
