import React from 'react';
import {connect} from 'react-redux';
import {addBicycle} from '../actions/addBicycle'

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>New Listing</h2><br/>

          <label>Listing Title: </label><br/>
          <input type='text' value={this.state.title} name='title' onChange={this.handleChange}></input><br/><br/>

          <label>Listing Description: </label><br/>
          <textarea value={this.state.description} name='description' onChange={this.handleChange}></textarea><br/><br/>

          <label>Bicycle Type: </label><br/>
          <select name='bicycle_type' value={this.state.bicycle_type} onChange={this.handleChange}>
            <option></option>
            <option>City Bicycle</option>
            <option>Mountain Bicycle</option>
            <option>Road Bicycle</option>
            <option>Folding Bicycle</option>
            <option>Trekking Bicycle</option>
          </select><br/><br/>

          <label>Bicycle Size: </label><br/>
          <select name='size' value={this.state.size} onChange={this.handleChange}>
            <option></option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select><br/><br/>

          <label>Bicycle Colour: </label><br/>
          <input type='text' value={this.state.colour} name='colour' onChange={this.handleChange}></input><br/><br/>

          <label>Price: </label><br/>
          <input type='text' value={this.state.price} name='price' onChange={this.handleChange}></input><br/><br/>

          <label>Country: </label><br/>
          <select></select><br/><br/>

          <label>City: </label><br/>
          <select></select><br/><br/>

          <label>Neighbourhood: </label><br/>
          <select></select><br/><br/>

          <input type='submit' value='Publish Listing'></input>
        </form>
      </div>
    )
  }
}

export default connect(null, {addBicycle})(CreateBicycleForm);
