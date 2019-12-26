import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu, Segment, Dropdown } from 'semantic-ui-react';

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
          <Menu.Item>
            <Input icon='search' placeholder='Search cities...' />
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/cities' name='cities' active={activeItem === 'cities'} onClick={this.handleItemClick}>Cities</Menu.Item>
            <Menu.Item as={Link} to='/bicycles/new' name='bicycles/new' active={activeItem === 'bicycles/new'} onClick={this.handleItemClick}>List Your Bicycle</Menu.Item>
            <Menu.Item as={Link} to='/users/:id/trips' name='trips' active={activeItem === 'trips'} onClick={this.handleItemClick}>Your Trips</Menu.Item>
            <Dropdown item simple text='Account' direction='right' options={
              [
                { key: 'profile', text: 'Public Profile', as: Link, to: '/users/:id/profile' },
                { key: 'account', text: 'Your Account', as: Link, to: '/users/:id' },
                { key: 'bicycles', text: 'Your Bicycles', as: Link, to: '/users/:id/bicycles' },
                { key: 'trips', text: 'Your Trips', as: Link, to: '/users/:id/trips' }
              ]
            } />
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}

export default NavBarLoggedIn;
