import React from 'react';
import { Form, Button, Container } from 'semantic-ui-react';

const SignUpForm = () => {

  return (
    <div className='form-wrapper'>
      <Container>
        <Form>
          <Form.Field>
            <label>Full Name: </label><br/>
            <input type='text' name='fullname' />
          </Form.Field>
          <Form.Field>
            <label>Email address: </label><br/>
            <input type='email' name='email' />
          </Form.Field>
          <Form.Field>
            <label>Password: </label><br/>
            <input type='password' name='password' />
          </Form.Field>
          <Button type='submit'>Log In</Button>
        </Form>
      </Container>
    </div>
  )
}

export default SignUpForm;
