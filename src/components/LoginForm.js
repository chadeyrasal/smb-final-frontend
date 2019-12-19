import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/auth';
import { login } from '../actions/auth';
import { Form, Button, Container } from 'semantic-ui-react';

const LoginForm = ({loginFormData, updateLoginForm, login}) => {
  const handleChange = event => {
    const {name, value} = event.target;
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    };
    updateLoginForm(updatedFormInfo);
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(loginFormData);
  }

  return (
    <Container className='formConatiner'>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Email address: </label><br/>
          <input type='email' name='email' value={loginFormData.email} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Password: </label><br/>
          <input type='password' name='password' value={loginFormData.password} onChange={handleChange} />
        </Form.Field>
        <Button type='submit'>Log In</Button>
      </Form>
    </Container>
  )
}

//this gives me an argument comins to this compoennt: {email: '...', password: '...'}
const mapStateToProps = state => {
  return {
    loginFormData: state.login
  }
}

export default connect(mapStateToProps, {updateLoginForm, login})(LoginForm);
