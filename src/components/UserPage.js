import React from 'react';
import { connect } from 'react-redux';
import { Container, Card, Grid, Segment } from 'semantic-ui-react';

const UserPage = (props) => {
  let user = props.currentUser

  if (user) {
    return (
      <Container>
        <Grid columns={3} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment basic>
                <Card>
                  <Card.Content>
                    {user.fullname}<br/>
                    {user.email}<br/>
                    {user.description}<br/>
                  </Card.Content>
                </Card>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {user.fullname}
      </Container>
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

export default connect(mapStateToProps)(UserPage);
