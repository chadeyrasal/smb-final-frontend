import React from 'react';
import { connect } from 'react-redux';

const UserPage = (props) => {
  let user = props.currentUser

  if (user) {
    return (
      <div>{user.fullname}</div>
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

export default connect(mapStateToProps)(UserPage);
