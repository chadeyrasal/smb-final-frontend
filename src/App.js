import React from 'react';
import {connect} from 'react-redux';
import CitiesContainer from './containers/CitiesContainer';
import BicyclesContainer from './containers/BicyclesContainer';
import {getCurrentUser} from './actions/getCurrentUser';
import NavBarLoggedIn from './components/NavBarLoggedIn';
import NavBarLoggedOut from './components/NavBarLoggedOut';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">


        {this.props.currentUser ? <NavBarLoggedIn /> : <NavBarLoggedOut />}

        <CitiesContainer />
        <BicyclesContainer />

        {/*<Footer />*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
