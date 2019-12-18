import React from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react';

class NavBarLoggedOut extends React.Component {
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
            <Menu.Item name='log in' active={activeItem === 'log in'} onClick={this.handleItemClick} />
            <Menu.Item name='sign up' active={activeItem === 'sign up'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}

export default NavBarLoggedOut;
