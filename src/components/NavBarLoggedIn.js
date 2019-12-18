import React from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react';

class NavBarLoggedIn extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (event, { name }) => {
    this.setState({ activeItem: name })
    {/*send to appropriate route according to name*/}
  }

  render() {
    const activeItem = this.state

    return(
      <Segment>
        <Menu secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>Home</Menu.Item>
          <Menu.Item>
            <Input icon='search' placeholder='Search cities...' />
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='cities' active={activeItem === 'cities'} onClick={this.handleItemClick}>Cities</Menu.Item>
            <Menu.Item name='bicycles/new' active={activeItem === 'bicycles/new'} onClick={this.handleItemClick}>List Your Bicycle</Menu.Item>
            <Menu.Item name='trips' active={activeItem === 'trips'} onClick={this.handleItemClick}>Your Trips</Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}

export default NavBarLoggedIn;
