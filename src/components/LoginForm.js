import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateLoginForm, login } from '../actions/auth';
import { Form, Button, Container, Segment, Divider } from 'semantic-ui-react';

const LoginForm = ({ loginFormData, updateLoginForm, login, history }) => {
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
    login(loginFormData, history);
  }

  return (
    <div className='form-wrapper'>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Email address: </label><br/>
            <input type='email' name='email' value={loginFormData.email} onChange={handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Password: </label><br/>
            <input type='password' name='password' value={loginFormData.password} onChange={handleChange} />
          </Form.Field>
          <Segment basic textAlign={'center'}>
            <Button type='submit' color='olive' style={{textAlign: 'center'}}>Log In</Button>
          </Segment>
        </Form>
      </Container><br />

      <Divider horizontal>Or</Divider><br /><br />

      <Button fluid basic color='grey' as={Link} to='/signup'>Sign Up</Button>
    </div>
  )
}

//this gives me an argument comins to this compoennt: {email: '...', password: '...'}
const mapStateToProps = state => {
  return {
    loginFormData: state.login
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(LoginForm);
