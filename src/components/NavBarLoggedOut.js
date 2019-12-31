import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu, Segment } from 'semantic-ui-react';

class NavBarLoggedOut extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (event, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const activeItem = this.state

    return(
      <Segment>
        <Menu secondary>
          <Menu.Item
            as={Link}
            to='/'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}>
            Home
          </Menu.Item>
          <Menu.Item>
            <Input icon='search' placeholder='Search cities...' />
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              as={Link}
              to='/login'
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}>
              Log In
            </Menu.Item>
            <Menu.Item
              as={Link}
              to='/signup' 
              name='signup'
              active={activeItem === 'signup'}
              onClick={this.handleItemClick}>
              Sign Up
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}

export default NavBarLoggedOut;
