import React from 'react';
import { connect } from 'react-redux';
import { addBicycle } from '../actions/addBicycle';
import { Form, Segment, Button, Header, Container } from 'semantic-ui-react';

class CreateBicycleForm extends React.Component {
  state = {
    title: '',
    description: '',
    bicycle_type: '',
    size: '',
    colour: '',
    price: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBicycle(this.state);
    this.setState({
      title: '',
      description: '',
      bicycle_type: '',
      size: '',
      colour: '',
      price: ''
    })
  }

  render() {
    return (
      <div className='form-wrapper'>
        <Container>
          <Segment basic textAlign={'center'}>
            <Header>New Bicycle Listing</Header>
          </Segment>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Listing Title: </label>
              <input type='text' value={this.state.title} name='title' onChange={this.handleChange}></input>
            </Form.Field>
            <Form.Field>
              <label>Listing Description: </label>
              <textarea value={this.state.description} name='description' onChange={this.handleChange}></textarea>
            </Form.Field>
            <Form.Field>
              <label>Bicycle Type: </label>
              <select name='bicycle_type' value={this.state.bicycle_type} onChange={this.handleChange}>
                <option></option>
                <option>City Bicycle</option>
                <option>Mountain Bicycle</option>
                <option>Road Bicycle</option>
                <option>Folding Bicycle</option>
                <option>Trekking Bicycle</option>
              </select>
            </Form.Field>
            <Form.Field>
              <label>Bicycle Size: </label>
              <select name='size' value={this.state.size} onChange={this.handleChange}>
                <option></option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </Form.Field>
            <Form.Field>
              <label>Bicycle Colour: </label>
              <input type='text' value={this.state.colour} name='colour' onChange={this.handleChange}></input>
            </Form.Field>
            <Form.Field>
              <label>Price: </label>
              <input type='text' value={this.state.price} name='price' onChange={this.handleChange}></input>
            </Form.Field>
            <Form.Field>
              <label>Country: </label>
              <select></select>
            </Form.Field>
            <Form.Field>
              <label>City: </label>
              <select></select>
            </Form.Field>
            <Form.Field>
              <label>Neighbourhood: </label>
              <select></select>
            </Form.Field>
            <Segment basic textAlign={'center'}>
              <Button type='submit' color='olive'>Publish Listing</Button>
            </Segment>
          </Form>
        </Container>
      </div>
    )
  }
}

export default connect(null, {addBicycle})(CreateBicycleForm);
