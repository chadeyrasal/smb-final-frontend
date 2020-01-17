import React from 'react';
import { Link } from 'react-router-dom';
import CityImage from '../images/city-landscape-at-night.jpg';
import { Card, Image, Button, Divider, Segment, Icon, Label } from 'semantic-ui-react';

class CityCard extends React.Component {
  state = {
    likes: 0
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        likes: prevState.likes + 1
      }
    })
  }

  render() {
    let city = this.props.city

    return (
      <Card key={city.id}>
        <Card.Content>
          <Image floated='right' size='tiny' src={CityImage} />
          <Card.Header><Link className='bold-link' to={`/cities/${city.id}`}>{city.name}</Link></Card.Header>
          <Card.Meta>{city.country.name}</Card.Meta>
          <Card.Description>
            See details on <Link className='bold-link' to={`/cities/${city.id}`}>{city.name}</Link> neighbourhoods and bicycles by clicking the buttons below
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Segment basic textAlign={'center'}>
            <Button.Group vertical labeled icon basic>
              <Button as={Link} to={`/cities/${city.id}/bicycles`} icon='bicycle' content='See Bicycles' />
              <Button as={Link} to={`/cities/${city.id}/neighbourhoods`} icon='location arrow' content='See Neighbourhoods' />
            </Button.Group>
            <Divider />
            <Button as='div' labelPosition='right'>
              <Button icon onClick={this.handleClick}><Icon name='heart' /> Like</Button>
              <Label as='a' basic pointing='left'>{this.state.likes}</Label>
            </Button>
          </Segment>
        </Card.Content>
      </Card>
    )
  }
}

export default CityCard;
