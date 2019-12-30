import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { Button } from 'semantic-ui-react';

const Logout = ({logout}) => {
  return (
    <Button compact onClick={logout}>Log Out</Button>
  )
}

export default connect(null, {logout})(Logout)
