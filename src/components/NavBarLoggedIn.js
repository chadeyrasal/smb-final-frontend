import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Segment, Dropdown } from 'semantic-ui-react';

class NavBarLoggedIn extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (event, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const activeItem = this.state

    return(
      <Segment>
        <Menu secondary>
          <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>Home</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/cities' name='cities' active={activeItem === 'cities'} onClick={this.handleItemClick}>Cities</Menu.Item>
            <Menu.Item as={Link} to='/bicycles/new' name='bicycles/new' active={activeItem === 'bicycles/new'} onClick={this.handleItemClick}>List Your Bicycle</Menu.Item>
            <Menu.Item as={Link} to={`/users/${this.props.currentUser.id}/trips`} name='trips' active={activeItem === 'trips'} onClick={this.handleItemClick}>Your Trips</Menu.Item>
            <Dropdown item simple text='Account' direction='right' options={
              [
                { key: 'profile', text: 'Public Profile', as: Link, to: `/users/${this.props.currentUser.id}/profile` },
                { key: 'account', text: 'Your Account', as: Link, to: `/users/${this.props.currentUser.id}` },
                { key: 'bicycles', text: 'Your Bicycles', as: Link, to: `/users/${this.props.currentUser.id}/bicycles` },
                { key: 'trips', text: 'Your Trips', as: Link, to: `/users/${this.props.currentUser.id}/trips` }
              ]
            } />
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(NavBarLoggedIn);
