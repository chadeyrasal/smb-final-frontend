import React from 'react';
import { connect } from 'react-redux';
import { updateNewTripForm, addTrip } from '../actions/newTrip';
import { Form, Segment, Button } from 'semantic-ui-react';

const NewTrip = ({newTripForm, bicycle, currentUser, updateNewTripForm, addTrip}) => {
  const handleChange = event => {
    const {name, value} = event.target;
    const updatedFormInfo = {
      ...newTripForm,
      [name]: value,
      bicycle: bicycle,
      renter: currentUser
    };
    updateNewTripForm(updatedFormInfo);
  }

  const handleSubmit = event => {
    event.preventDefault();
    addTrip(newTripForm);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Start Date: </label>
          <input type='date' value={newTripForm.startDate} name='startDate' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>End Date: </label>
          <input type='date' value={newTripForm.endDate} name='endDate' onChange={handleChange} />
        </Form.Field>
        <Segment basic textAlign={'center'}>
          <Button type='submit' color='olive'>Book this bicycle</Button>
        </Segment>
      </Form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    newTripForm: state.newTrip
  }
}

export default connect(mapStateToProps, { updateNewTripForm, addTrip })(NewTrip);
