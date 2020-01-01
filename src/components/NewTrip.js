import React from 'react';
import { Container, Form, Segment, Button, Grid } from 'semantic-ui-react';

class NewTrip extends React.Component {
  state = {
    startDate: new Date(),
    endDate: new Date()
  }

  render() {
    return (
      <div>
        <Container>
          <Grid columns={2}>
            <Grid.Row stretched>
              <Grid.Column>
                <Segment basic></Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Form>
                    <Form.Field>
                      <label>Start Date: </label>
                      <input type='date' value={this.state.startDate} name='startDate' onChange={event => this.setState({startDate: event.target.value})} />
                    </Form.Field>
                    <Form.Field>
                      <label>End Date: </label>
                      <input type='date' value={this.state.endDate} name='endDate' onChange={event => this.setState({endDate: event.target.value})} />
                    </Form.Field>
                    <Segment basic textAlign={'center'}>
                      <Button type='submit' color='olive'>Book this bicycle</Button>
                    </Segment>
                  </Form>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  };
}

export default NewTrip;
