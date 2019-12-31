import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm, signup } from '../actions/auth';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Segment, Divider } from 'semantic-ui-react';

const SignUpForm = ({ signupFormData, updateSignupForm, signup, history }) => {

  const handleChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  return (
    <div className='form-wrapper'>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Full Name: </label><br/>
            <input value={signupFormData.fullname} onChange={handleChange} type='text' name='fullname' />
          </Form.Field>
          <Form.Field>
            <label>Email address: </label><br/>
            <input value={signupFormData.email} onChange={handleChange} type='email' name='email' />
          </Form.Field>
          <Form.Field>
            <label>Password: </label><br/>
            <input value={signupFormData.password} onChange={handleChange} type='password' name='password' />
          </Form.Field>
          <Segment basic textAlign={'center'}>
            <Button type='submit' color='olive' style={{textAlign: 'center'}}>Sign Up</Button>
          </Segment>
        </Form>
      </Container><br />

      <Divider horizontal>Or</Divider><br /><br />

      <Button fluid basic color='grey' as={Link} to='/login'>Log In</Button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    signupFormData: state.signup
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(SignUpForm);
