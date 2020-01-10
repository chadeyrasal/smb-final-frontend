import React from 'react';
import { connect } from 'react-redux';
import { updateNewTripForm, addTrip } from '../actions/newTrip';
import { Form, Segment, Button } from 'semantic-ui-react';

const NewTrip = ({newTripForm, bicycle, currentUser, updateNewTripForm}) => {
  const addProps = () => {
    const addedProps = {
      ...newTripForm,
      bicycle: bicycle,
      renter: currentUser
    };
    updateNewTripForm(addedProps);
  }

  const handleChange = event => {
    const {name, value} = event.target;
    const updatedFormInfo = {
      ...newTripForm,
      [name]: value
    };
    updateNewTripForm(updatedFormInfo);
  }

  const handleSubmit = event => {
    event.preventDefault();
    addProps();
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

// class NewTrip extends React.Component {
//   state = {
//     startDate: new Date(),
//     endDate: new Date(),
//     bicycle: this.props.bicycle,
//     renter: this.props.currentUser
//   }
//
//   handleSubmit(event) {
//     event.preventDefault()
//     debugger
//   }
//
//   render() {
//     return (
//       <div>
//         <Form onSubmit={this.handleSubmit}>
//           <Form.Field>
//             <label>Start Date: </label>
//             <input type='date' value={this.state.startDate} name='startDate' onChange={event => this.setState({startDate: event.target.value})} />
//           </Form.Field>
//           <Form.Field>
//             <label>End Date: </label>
//             <input type='date' value={this.state.endDate} name='endDate' onChange={event => this.setState({endDate: event.target.value})} />
//           </Form.Field>
//           <Segment basic textAlign={'center'}>
//             <Button type='submit' color='olive'>Book this bicycle</Button>
//           </Segment>
//         </Form>
//       </div>
//     )
//   }
// }

const mapStateToProps = state => {
  return {
    newTripForm: state.newTrip
  }
}

export default connect(mapStateToProps, { updateNewTripForm, addTrip })(NewTrip);
