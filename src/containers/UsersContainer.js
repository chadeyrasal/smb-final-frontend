import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import UserPage from '../components/UserPage';
import UserProfile from '../components/UserProfile';
import { fetchUsers } from '../actions/users';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        <Route exact path='/users/:id' render={() => <UserPage />} />
        <Route path='/users/:id/profile' component={UserProfile} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, { fetchUsers })(UsersContainer);
