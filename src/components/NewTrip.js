import React from 'react';
import { connect } from 'react-redux';
import { addTrip } from '../actions/trips';
import { Form, Segment, Button } from 'semantic-ui-react';

class NewTrip extends React.Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
    bicycle: this.props.bicycle,
    renter: this.props.currentUser
  }

  handleSubmit(event) {
    event.preventDefault()
    debugger
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    newTripForm: state.newTrip
  }
}

export default connect(mapStateToProps, { addTrip })(NewTrip);
