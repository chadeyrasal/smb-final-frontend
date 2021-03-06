import React from 'react';
import { Link } from 'react-router-dom';
import London from '../images/london-uk.jpg';
import { Container, Card, Image, Segment, Button, List, Label, Icon, Grid } from 'semantic-ui-react';

const CityPage = (props) => {
  let city = props.cities.filter(city => city.id === parseInt(props.match.params.id))[0]

  if (city) {
    return (
      <Container textAlign={'center'}>
        <Grid columns={3} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment basic>
                <Card>
                  <Image src={London} />
                  <Card.Content>
                    <Card.Header>{city.name}</Card.Header>
                    <Card.Meta>{city.country.name}</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <Segment basic textAlign={'center'}>
                      <Button.Group vertical labeled icon basic>
                        <Button as={Link} to={`/cities/${city.id}/bicycles`} icon='bicycle' content={`${city.bicycles.length} bicycle(s) in ${city.name}`}  />
                        <Button as={Link} to={`/cities/${city.id}/neighbourhoods`} icon='location arrow' content={`${city.neighbourhoods.length} neighbourhood(s) in ${city.name}`} />
                      </Button.Group>
                    </Segment>
                  </Card.Content>
                </Card>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic>
                <Card>
                  <Card.Content>
                    <Card.Header>Neighbourhoods</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <List divided relaxed>
                      {city.neighbourhoods.map(neighbourhood =>
                        <List.Item key={neighbourhood.id}>
                          <List bulleted horizontal link>
                            <List.Item>{neighbourhood.name}</List.Item>
                            <List.Item as={Link} to={`/neighbourhoods/${neighbourhood.id}`}>See details</List.Item>
                          </List>
                        </List.Item>
                      )}
                    </List>
                  </Card.Content>
                </Card>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic>
                <Card>
                  <Card.Content>
                    <Card.Header>Bicycles</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <List divided relaxed>
                      {city.bicycles.map(bicycle =>
                        <List.Item key={bicycle.id}>
                          <List.Content>
                            <Card.Description>{bicycle.title}</Card.Description>
                            <List bulleted horizontal link>
                              <List.Item><Label><Icon name='tag' /> £{bicycle.price}</Label></List.Item>
                              <List.Item as={Link} to={`/bicycles/${bicycle.id}`}>See details</List.Item>
                            </List>
                          </List.Content>
                        </List.Item>
                      )}
                    </List>
                  </Card.Content>
                </Card>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  } else {
    return null
  }
}

export default CityPage;
