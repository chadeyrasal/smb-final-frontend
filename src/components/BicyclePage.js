import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NewTrip from './NewTrip';
import GreenBicycle from '../images/green-bike-by-water.jpg';
import { Container, Card, Grid, Segment, Button, Image, Divider, Feed, Icon } from 'semantic-ui-react';

const BicyclePage = (props) => {
  let bicycle = props.bicycles.filter(bicycle => bicycle.id === parseInt(props.match.params.id))[0]

  if (bicycle) {
    return (
      <div>
        <Container>
          <Grid columns={3} divided>
            <Grid.Row stretched>
              <Grid.Column>
                <Segment basic textAlign={'center'}>
                  <Image src={GreenBicycle}/>
                  <Divider />
                  <NewTrip bicycle={bicycle} currentUser={props.currentUser}/>
                </Segment>
              </Grid.Column>

              <Grid.Column>
                <Segment basic>
                  <Card>
                    <Card.Content>
                      <Card.Header>{bicycle.title}</Card.Header>
                      <Card.Meta><Link to={`/neighbourhoods/${bicycle.neighbourhood.id}`}>{bicycle.neighbourhood.name}</Link>- <Link to={`/cities/${bicycle.neighbourhood.city.id}`}>{bicycle.neighbourhood.city.name}</Link></Card.Meta>
                      <Card.Description>{bicycle.description}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Segment basic textAlign={'center'}>
                      <Button.Group basic vertical>
                        <Button circular icon='setting'/>
                        <Button circular icon='resize vertical'/>
                        <Button circular icon='circle outline'/>
                        <Button circular icon='tag'/>
                      </Button.Group>
                      <Button.Group basic vertical>
                        <Button>{bicycle.bicycle_type}</Button>
                        <Button>{bicycle.size}</Button>
                        <Button>{bicycle.colour}</Button>
                        <Button>£{bicycle.price}</Button>
                      </Button.Group>
                      </Segment>
                    </Card.Content>
                    <Card.Content extra>
                      <Segment basic textAlign={'center'}>
                        Owner: <Link to={`/users/${bicycle.owner.id}/profile`}>{bicycle.owner.fullname}</Link>
                      </Segment>
                    </Card.Content>
                  </Card>
                </Segment>
              </Grid.Column>

              <Grid.Column>
                <Segment basic>
                  <Feed>
                    <Feed.Event>
                      <Feed.Label>
                        <Image src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                      </Feed.Label>
                      <Feed.Content>
                        <Feed.Summary>
                          <Feed.User>Elliot</Feed.User> added a review
                          <Feed.Date>2 days ago</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra text>
                          Great bike and great owner. Would recommend
                        </Feed.Extra>
                        <Feed.Meta>
                          <Feed.Like>
                            <Icon name='triangle up' /> 4 people found this review useful
                          </Feed.Like>
                        </Feed.Meta>
                      </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                      <Feed.Label>
                        <Image src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
                      </Feed.Label>
                      <Feed.Content>
                        <Feed.Summary>
                          <Feed.User>Rachel</Feed.User> added a review
                          <Feed.Date>1 month ago</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra text>
                          This is a great bicycle that I would recommend to anyone who plans on cycling for more than 20 minutes at a time
                        </Feed.Extra>
                        <Feed.Meta>
                          <Feed.Like>
                            <Icon name='triangle up' /> 7 people found this review useful
                          </Feed.Like>
                        </Feed.Meta>
                      </Feed.Content>
                    </Feed.Event>
                  </Feed>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
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

export default connect(mapStateToProps)(BicyclePage);
